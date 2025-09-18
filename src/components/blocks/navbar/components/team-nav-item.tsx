"use client";

export default function TeamNavItem() {
  const handleTeamClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
      teamSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <li className="nav-item">
      <a 
        href="#team-section"
        onClick={handleTeamClick}
        className="nav-link"
      >
        Takım
      </a>
    </li>
  );
}
