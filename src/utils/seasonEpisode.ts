export function episodeCode(seasonNum: number, episodeNum: number): string {
  let outputSeason = "";
  let outputEpisode = "";
  if (seasonNum < 10) {
    outputSeason = `S0${seasonNum}`;
  } else {
    outputSeason = `S${seasonNum}`;
  }
  if (episodeNum < 10) {
    outputEpisode = `E0${episodeNum}`;
  } else {
    outputEpisode = `E${episodeNum}`;
  }
  const result = `${outputSeason}${outputEpisode}`;
  return result;
}
