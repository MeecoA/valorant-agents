export interface IAgent {
  uuid: string;
  displayName: string;
  killfeedPortrait: string;
  background: string;
  description: string;
  developerName: string;
  characterTags: string[];
  displayIcon: string;
  fullPortrait: string;
  displayIconSmall: string;
  isPlayableCharacter: true;
  role: {
    displayName: string;
    displayIcon: string;
  };
}
