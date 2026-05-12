import { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import GameDetailFooter from '../components/GameDetailFooter';
import { prepareGameMainHtml } from '../gameHtml';

export default function GameDetailPage() {
  const { slug = '' } = useParams();

  const prepared = useMemo(() => prepareGameMainHtml(slug), [slug]);

  useEffect(() => {
    if (prepared) {
      document.title = prepared.pageTitle;
    }
    document.body.classList.add('page-game-detail');
    return () => {
      document.body.classList.remove('page-game-detail');
      document.title = 'Trò Chơi Dân Gian — Gìn giữ tinh hoa văn hóa Việt';
    };
  }, [prepared]);

  if (!prepared) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SiteHeader layout="detail" />

      <div dangerouslySetInnerHTML={{ __html: prepared.mainHtml }} />

      <GameDetailFooter />
    </>
  );
}
