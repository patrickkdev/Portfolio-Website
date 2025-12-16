import type { NextApiRequest, NextApiResponse } from 'next';

const USER = 'patrickkdev';

const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [
      userRes,
      eventsRes,
      reposRes,
      commitsRes,
      prsRes,
      issuesRes,
    ] = await Promise.all([
      fetch(`https://api.github.com/users/${USER}`, { headers }),
      fetch(`https://api.github.com/users/${USER}/events/public`, { headers }),
      fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, { headers }),
      fetch(`https://api.github.com/search/commits?q=author:${USER}`,
        {
          headers: {
            ...headers,
            Accept: 'application/vnd.github.cloak-preview+json',
          },
        }
      ),
      fetch(`https://api.github.com/search/issues?q=author:${USER}+type:pr`, { headers }),
      fetch(`https://api.github.com/search/issues?q=author:${USER}+type:issue`, { headers }),
    ]);

    if (
      !userRes.ok ||
      !eventsRes.ok ||
      !reposRes.ok ||
      !commitsRes.ok ||
      !prsRes.ok ||
      !issuesRes.ok
    ) {
      return res.status(502).json({ error: 'GitHub API error' });
    }

    const [user, events, repos, commits, prs, issues] = await Promise.all([
      userRes.json(),
      eventsRes.json(),
      reposRes.json(),
      commitsRes.json(),
      prsRes.json(),
      issuesRes.json(),
    ]);

    const stars = repos.reduce(
      (sum: number, r: any) => sum + (r.stargazers_count ?? 0),
      0
    );

    const contributedRepos = new Set(
      commits.items?.map((c: any) => c.repository.full_name) ?? []
    );

    res.json({
      publicRepos: user.public_repos,
      followers: user.followers,
      starsReceived: stars,
      totalCommits: commits.total_count,
      totalPullRequests: prs.total_count,
      totalIssues: issues.total_count,
      contributedTo: contributedRepos.size,
      lastPushedAt: events.find((e: any) => e.type === 'PushEvent')?.created_at ?? null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
