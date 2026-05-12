import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import type { GameDetailModel, GameSectionModel } from '../types/gameDetail';

function renderSection(section: GameSectionModel, sectionIndex: number) {
  const key = `section-${sectionIndex}`;
  if (section.sectionClass === 'game-detail-process') {
    return (
      <section key={key} className="game-detail-process">
        <h2>{section.h2}</h2>
        {section.groups.map((g, i) => (
          <div key={i} className="game-detail-step">
            {g.h3 ? <h3>{g.h3}</h3> : null}
            <ul>
              {g.ul.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  return (
    <section key={key}>
      <h2>{section.h2}</h2>
      {section.groups.map((g, i) => (
        <Fragment key={i}>
          {g.h3 ? <h3>{g.h3}</h3> : null}
          <ul>
            {g.ul.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </Fragment>
      ))}
    </section>
  );
}

export default function GameDetailMain({ model }: { model: GameDetailModel }) {
  return (
    <main className="game-detail">
      <div className="game-detail-cover">
        <img src={model.coverSrc} alt={model.coverAlt} width={1200} height={675} />
      </div>
      <div className="game-detail-inner">
        <Link to="/#games" className="game-detail-back">
          ← Danh sách trò chơi
        </Link>
        <h1>{model.heading}</h1>
        <p className="game-detail-lead">{model.lead}</p>
        <article className="game-detail-prose">{model.sections.map((s, i) => renderSection(s, i))}</article>
      </div>
    </main>
  );
}
