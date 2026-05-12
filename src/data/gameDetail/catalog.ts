import type { GameDetailModel } from '../../types/gameDetail';
import { bapBenhGame } from './bap-benh';
import { batVitGame } from './bat-vit';
import { cauKieuGame } from './cau-kieu';
import { danhDuGame } from './danh-du';
import { dapNieuGame } from './dap-nieu';
import { nemConGame } from './nem-con';
import { nhaySapGame } from './nhay-sap';

export const gameDetailsBySlug: Record<string, GameDetailModel> = {
  'danh-du': danhDuGame,
  'dap-nieu': dapNieuGame,
  'nhay-sap': nhaySapGame,
  'bat-vit': batVitGame,
  'cau-kieu': cauKieuGame,
  'bap-benh': bapBenhGame,
  'nem-con': nemConGame,
};

export const GAME_DETAIL_SLUGS = Object.keys(gameDetailsBySlug);

export function getGameDetail(slug: string): GameDetailModel | undefined {
  return gameDetailsBySlug[slug];
}
