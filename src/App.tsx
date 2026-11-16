import { useState } from 'react';
import { useApp } from './state/store';
import { currentPath, navigate, useRoute } from './ui/router';
import { Link } from './ui/parts';
import { DashboardPage } from './ui/pages/Dashboard';
import { CatalogPage, CoursePage, LessonPage } from './ui/pages/Catalog';
import { AssessmentPage } from './ui/pages/Assessment';
import {
  AttendancePage,
  GradebookPage,
  GraduationPage,
  ReportCardPage,
  TranscriptPage,
} from './ui/pages/Records';
import { AdultEdPage, PoliciesPage, SettingsPage, SourcesPage } from './ui/pages/Reference';

const NAV = [
  {
    title: 'School',
    links: [
      { to: '/dashboard', label: 'Dashboard' },
      { to: '/catalog', label: 'Course catalog' },
    ],
  },
  {
    title: 'Records',
    links: [
      { to: '/gradebook', label: 'Gradebook' },
      { to: '/report-card', label: 'Report card' },
      { to: '/transcript', label: 'Transcript' },
      { to: '/attendance', label: 'Attendance' },
      { to: '/graduation', label: 'Graduation audit' },
    ],
  },
  {
    title: 'Reference',
    links: [
      { to: '/adult-ed', label: 'Adult life education' },
      { to: '/policies', label: 'Law & records policy' },
      { to: '/sources', label: 'Sources' },
      { to: '/settings', label: 'Settings' },
    ],
  },
];

export function App() {
  const { path, segments } = useRoute();
  const { state } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  function render() {
    const [first, second, third, fourth] = segments;

    if (!first || first === 'dashboard') return <DashboardPage />;
    if (first === 'catalog') return <CatalogPage />;
    if (first === 'course' && second) return <CoursePage courseId={second} />;
    if (first === 'lesson' && second && third) {
      return <LessonPage courseId={second} lessonId={third} />;
    }
    if (first === 'assessment' && second && third) {
      const kind = third === 'quiz' || third === 'project' || third === 'final' || third === 'capstone' ? third : 'final';
      return <AssessmentPage courseId={second} kind={kind} unitId={fourth} />;
    }
    if (first === 'gradebook') return <GradebookPage />;
    if (first === 'report-card') return <ReportCardPage />;
    if (first === 'transcript') return <TranscriptPage />;
    if (first === 'attendance') return <AttendancePage />;
    if (first === 'graduation') return <GraduationPage />;
    if (first === 'adult-ed') return <AdultEdPage />;
    if (first === 'policies') return <PoliciesPage />;
    if (first === 'sources') return <SourcesPage />;
    if (first === 'settings') return <SettingsPage />;

    return (
      <div className="empty">
        <strong>Page not found</strong>
        <div className="small" style={{ marginTop: 6 }}>
          <Link to="/dashboard">Return to the dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mobile-nav no-print">
        <strong>Texas Home Academy</strong>
        <button onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close' : 'Menu'}</button>
      </div>
      <div className="app">
        <aside className={`sidebar no-print${menuOpen ? ' open' : ''}`}>
          <a
            className="brand"
            href="#/dashboard"
            onClick={(event) => {
              event.preventDefault();
              navigate('/dashboard');
              setMenuOpen(false);
            }}
          >
            <span className="brand-mark">TX</span>
            <span className="brand-text">
              <strong>Texas Home Academy</strong>
              <span>Free · K–12 · Self-hosted</span>
            </span>
          </a>

          {NAV.map((group) => (
            <div className="nav-group" key={group.title}>
              <div className="nav-group-title">{group.title}</div>
              {group.links.map((link) => {
                const active =
                  currentPath() === link.to ||
                  (link.to !== '/dashboard' && currentPath().startsWith(link.to)) ||
                  (link.to === '/catalog' && (segments[0] === 'course' || segments[0] === 'lesson'));
                return (
                  <a
                    key={link.to}
                    className={`nav-link${active ? ' active' : ''}`}
                    href={`#${link.to}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(link.to);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          ))}

          <div className="nav-group">
            <div className="nav-group-title">Student</div>
            <div className="nav-link" style={{ cursor: 'default', color: '#93a9c0' }}>
              {state.profile.firstName || 'Not set'}
              {state.profile.gradeLevel === 0
                ? ' · Kindergarten'
                : ` · Grade ${state.profile.gradeLevel}`}
            </div>
          </div>
        </aside>

        <main className="main">{render()}</main>
      </div>
    </>
  );
}
