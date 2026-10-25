
import React, { useState } from "react";
import {
  Trophy,
  Medal,
  MapPin,
  Globe,
  Award,
  ChevronRight,
} from "lucide-react";

const resultsData = {
  Regionals: {
    categories: {
      Maze: [
        { team: "TECH X", position: "1st", medal: "🥇" },
        { team: "Cicuit 4", position: "2nd", medal: "🥈" },
        { team: "Bobot Productions", position: "3rd", medal: "🥉" },
        { team: "RV Quantum", medal: "🏅" },
        { team: "Fyre Fly", medal: "🏅" },
        { team: "ResQX", medal: "🏅" },
        { team: "Maze Explorers", medal: "🏅" },
        { team: "Mazer Breaker 2.0", medal: "🏅" },
        { team: "Robochamp", medal: "🏅" },
        { team: "Aimbot", medal: "🏅" },
        { team: "Maze Marvericks", medal: "🏅" },
        { team: "ROBOSQUAD", medal: "🏅" },
        { team: "Maze Destroyers", medal: "🏅" },
        { team: "Robo Dragons", medal: "🏅" },
        { team: "RoboBrain", medal: "🏅" },
        { team: "MADS", medal: "🏅" },
        { team: "Salopian 2", medal: "🏅" },
        { team: "Error 404", medal: "🏅" },
      ],

      Line: [
        { team: "System Override", position: "1st", medal: "🥇" },
        { team: "Circuit Surfers", position: "2nd", medal: "🥈" },
        { team: "Pathfinders", position: "3rd", medal: "🥉" },
        { team: "Access Denied", medal: "🏅" },
        { team: "Minotaur", medal: "🏅" },
        { team: "Over Complicated", medal: "🏅" },
        { team: "Forever EV3", medal: "🏅" },
        { team: "Robo Warrior India", medal: "🏅" },
        { team: "Sark Saviour", medal: "🏅" },
        { team: "LIS NovaBots", medal: "🏅" },
        { team: "Tech Titans", medal: "🏅" },
        { team: "Tuff Gang", medal: "🏅" },
        { team: "LIS RoboRangers", medal: "🏅" },
        { team: "Gearsheads", medal: "🏅" },
        { team: "Omni Phoenix Reunion", medal: "🏅" },
        { team: "Zeta Patrol", medal: "🏅" },
        { team: "Phantom Nex", medal: "🏅" },
        { team: "GGS Tech Titans", medal: "🏅" },
        { team: "GD Line2", medal: "🏅" },
        { team: "Roboduos", medal: "🏅" },
      ],

      Soccer: [
        { team: "SPYDER", position: "1st", medal: "🥇" },
        { team: "SQUADRONS AND Robo FC", position: "2nd", medal: "🥈" },
        { team: "NFS", position: "3rd", medal: "🥉" },
        { team: "Cyber Kickers", medal: "🏅" },
        { team: "Code Strikers", medal: "🏅" },
        { team: "Team Soccer RVA", medal: "🏅" },
        { team: "ROBOWARRIOR", medal: "🏅" },
        { team: "team AMUD Soccer", medal: "🏅" },
        { team: "Goated Goats", medal: "🏅" },
        { team: "BABA Beats", medal: "🏅" },
        { team: "Robo Strikers", medal: "🏅" },
        { team: "VVS SupaStrikas", medal: "🏅" },
        { team: "Robo Raviators", medal: "🏅" },
        { team: "Team Deadlock", medal: "🏅" },
        { team: "VVS Ballers", medal: "🏅" },
        { team: "Robo-Ballers", medal: "🏅" },
        { team: "Midas", medal: "🏅" },
        { team: "MESSI", medal: "🏅" },
        { team: "Fantom Strikers", medal: "🏅" },
      ],

     Awards: [
  // Maze Awards
  {
    team: "MADS",
    position: "Best Robot Design — Maze",
    medal: "🏆",
  },
  {
    team: "SALOPIAN 2",
    position: "Best Innovation — Maze",
    medal: "🏆",
  },
  {
    team: "INFRAL",
    position: "Best Engineer — Maze",
    medal: "🏆",
  },

  // Line Awards
  {
    team: "QUANTUM",
    position: "Best Robot Design — Line",
    medal: "🏆",
  },
  {
    team: "AWOUG BOT LIS",
    position: "Best Innovation — Line",
    medal: "🏆",
  },
  {
    team: "SARK SAVIOUR",
    position: "Best Engineer — Line",
    medal: "🏆",
  },

  // Soccer Awards
  {
    team: "TEAM AMUD Soccer",
    position: "Best Robot Design — Soccer",
    medal: "🏆",
  },
  {
    team: "NFS",
    position: "Best Innovation — Soccer",
    medal: "🏆",
  },
  {
    team: "GD CHAMP",
    position: "Best Engineer — Soccer",
    medal: "🏆",
  },
],
    },
  },

  Nationals: {
    categories: {
      Maze: [],
      Line: [],
      Soccer: [],
      Awards: [],
    },
  },

  International: {
    categories: {
      Maze: [],
      Line: [],
      Soccer: [],
      Awards: [],
    },
  },
};

const eventInfo = {
  Regionals: {
    icon: MapPin,
    description: "Explore teams competing in regional RoboCup events.",
  },
  Nationals: {
    icon: Trophy,
    description: "Celebrate India's national robotics competitors and champions.",
  },
  International: {
    icon: Globe,
    description: "Explore results from the international RoboCup stage.",
  },
};

export default function Results() {
  const [event, setEvent] = useState("Regionals");
  const [category, setCategory] = useState("Maze");

  const categories = Object.keys(resultsData[event].categories);
  const teams = resultsData[event].categories[category];
  const EventIcon = eventInfo[event].icon;

  const changeEvent = (name) => {
    setEvent(name);
    setCategory("Maze");
  };

  return (
    <main className="inner-page results-page">
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ROBOCUP 2026 · RESULTS</span>
          <h1>
            Celebrate the <em>achievers.</em>
          </h1>
          <p>
            Explore competition results, discover participating teams, and
            celebrate the achievements of RoboCup 2026.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Results heading */}
          <div className="results-heading">
            <div>
              <span className="eyebrow">COMPETITION ARCHIVE</span>
              <h2>RoboCup 2026</h2>
              <p>Select an event level to explore its results.</p>
            </div>

            <div className="results-year">
              <Trophy size={20} />
              <span>2026 Season</span>
            </div>
          </div>

          {/* Regionals / Nationals / International */}
          <div className="results-event-tabs">
            {Object.keys(resultsData).map((name) => {
              const Icon = eventInfo[name].icon;

              return (
                <button
                  type="button"
                  key={name}
                  className={`results-event-tab ${
                    event === name ? "active" : ""
                  }`}
                  onClick={() => changeEvent(name)}
                  aria-pressed={event === name}
                >
                  <Icon size={20} />
                  <span>{name}</span>
                  <ChevronRight size={16} />
                </button>
              );
            })}
          </div>

          {/* Selected event introduction */}
          <div className="results-event-intro">
            <div className="results-event-icon">
              <EventIcon size={26} />
            </div>

            <div>
              <span className="mini-tag">ROBOCUP 2026</span>
              <h3>{event}</h3>
              <p>{eventInfo[event].description}</p>
            </div>
          </div>

          {/* Maze / Line / Soccer / Awards */}
          <div className="results-category-tabs">
            {categories.map((name) => {
              const Icon = name === "Awards" ? Award : Medal;

              return (
                <button
                  type="button"
                  key={name}
                  className={`results-category-tab ${
                    category === name ? "active" : ""
                  }`}
                  onClick={() => setCategory(name)}
                  aria-pressed={category === name}
                >
                  <Icon size={17} />
                  {name}
                </button>
              );
            })}
          </div>

          {/* Category heading */}
          <div className="results-category-heading">
            <div>
              <span className="mini-tag">{event.toUpperCase()}</span>
              <h2>
                {category}
                {category === "Awards" ? "" : " Results"}
              </h2>
            </div>

            <span className="results-count">
              {teams.length} {teams.length === 1 ? "entry" : "entries"}
            </span>
          </div>

          {/* Teams */}
          {teams.length > 0 ? (
            <div className="results-winners-grid">
              {teams.map((team, index) => (
                <article className="results-winner-card" key={team.team}>
                  <div className="winner-rank">
                    <span>{team.medal}</span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>

                  <div className="winner-info">
                    <span className="mini-tag">{category}</span>
                    <h3>{team.team}</h3>
                    {team.position && <p>{team.position}</p>}
                  </div>

                  <Trophy
                    className="winner-trophy"
                    size={23}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          ) : (
            <div className="results-empty">
              <Trophy size={38} />
              <h3>Results coming soon</h3>
              <p>
                Official {event} {category.toLowerCase()} results will appear
                here once they are announced.
              </p>
            </div>
          )}

          <p className="results-note">
            
          </p>
        </div>
      </section>
    </main>
  );
}
