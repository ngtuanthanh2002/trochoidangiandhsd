import { useEffect, useLayoutEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import GameDetailFooter from '../components/GameDetailFooter';
import GameDetailMain from '../components/GameDetailMain';
import { getGameDetail } from '../data/gameDetail/catalog';

export default function GameDetailPage() {
  const { slug = '' } = useParams();

  const model = useMemo(() => getGameDetail(slug), [slug]);

  useLayoutEffect(() => {
    if (!model) return;
    window.scrollTo(0, 0);
  }, [model]);

  useEffect(() => {
    if (model) {
      document.title = model.pageTitle;
    }
    document.body.classList.add('page-game-detail');
    return () => {
      document.body.classList.remove('page-game-detail');
      document.title = 'Trò Chơi Dân Gian — Gìn giữ tinh hoa văn hóa Việt';
    };
  }, [model]);

  if (!model) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SiteHeader layout="detail" />

      <GameDetailMain model={model} />

      <GameDetailFooter />
    </>
  );
}
