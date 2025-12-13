import React from 'react';
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
          <FiGithub className="h-4 w-4" />
          GitHub (Atualizado agora)
        </div>

        <a
          href="https://github.com/patrickkdev"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-500 hover:text-zinc-900"
        >
          Ver perfil →
        </a>
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
