import React from 'react';
import GitHubButton from 'react-github-btn';
import { FiGithub } from 'react-icons/fi';
import { Stat } from '../shared/Stat';

type GitHubStats = {
  public_repos: number;
  followers: number;
  stars_received: number;
  total_commits: number;
  total_prs: number;
  total_issues: number;
  contributed_to: number;
  last_active_at: string | null;
};

export default function GitHubStatsSection() {
  const [stats, setStats] = React.useState<GitHubStats | null>(null);

  React.useEffect(() => {
    fetch('/api/github')
      .then(r => r.json())
      .then(setStats);
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-sm font-medium">
          <FiGithub className="h-5 w-5 mr-1" />
          <div>
            <p>GitHub</p>
            <small className="opacity-50">atualizado agora</small>
          </div>
        </div>

        <GitHubButton href="https://github.com/patrickkdev" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Follow @patrickkdev on GitHub">Follow @patrickkdev</GitHubButton>
      </div>

      <div className="grid grid-cols-3 divide-x divide-y divide-zinc-200 dark:divide-zinc-800">
        <Stat
          label="Última atividade"
          value={
            stats?.last_active_at
              ? new Date(stats.last_active_at).toLocaleDateString()
              : '—'
          }
        />
        <Stat label="Repos Públicos" value={stats?.public_repos} />
        <Stat label="Pull Requests" value={stats?.total_prs} />

        <Stat label="Commits" value={stats?.total_commits} />
        <Stat label="Issues" value={stats?.total_issues} />
        <Stat label="Contribuições" value={stats?.contributed_to} />
      </div>
    </div>
  );
}
