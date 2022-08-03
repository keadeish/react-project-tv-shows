import { IEpisode } from "./interface";
export function isMatching(
  episodes: IEpisode[],
  searchTerm: string
): IEpisode[] {
  function oneMatchesSearchTerm(episode: IEpisode): boolean {
    if (
      episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  }
  return episodes.filter(oneMatchesSearchTerm);
}
