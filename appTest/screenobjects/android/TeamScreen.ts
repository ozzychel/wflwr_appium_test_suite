import AppScreen from "./AppScreen";

class TeamScreen extends AppScreen {
  constructor () {
    super("~TeamScreen");
  }

  private get yourTeamTab () {return $('//android.widget.TextView[@text="YOUR TEAM"]')};
  private get exploreTeams () {return $('//android.widget.TextView[@text="EXPLORE TEAMS"]')};

  async tapYourTeamTab () {
    await this.yourTeamTab.click();
  }

  async tapExploreTeamsTab () {
    await this.exploreTeams.click();
  }
}

module.exports = new TeamScreen();