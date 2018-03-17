var app = angular.module("oddsgeir");

app.service("leagueService", function() {
  var urls = [];

  //Returnerer urlene til alle ligaer som ønskes
  this.allLeagues = function() {
    urls = [];
    init();
    //initTest();

    return urls;
  }

  this.getLeagueFromUrl = function(url) {
    for(var i = 0; i < urls.length; i++) {
      if(urls[i].url == url) {
        return urls[i];
      }
    }
  }

  function initTest() {
    urls.push(new League("Premier League", "England", "http://www.betexplorer.com/soccer/england/premier-league"));
    urls.push(new League("Championship", "England", "http://www.betexplorer.com/soccer/england/championship"));
  }

  function init() {

    //Albania
    urls.push(new League("Super League", "Albania", "http://www.betexplorer.com/soccer/albania/super-league"));

    //Argentina
    urls.push(new League("Superliga", "Argentina", "http://www.betexplorer.com/soccer/argentina/superliga/"));
    urls.push(new League("Primera B Nacional", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-b-nacional"));
    urls.push(new League("Primera B Metropolitana", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-b-metropolitana"));
    urls.push(new League("Primera C Metropolitana", "Argentina", "http://www.betexplorer.com/soccer/argentina/primera-c-metropolitana"));

    //Australia
    urls.push(new League("A League", "Australia", "http://www.betexplorer.com/soccer/australia/a-league"));

    //Austria
    urls.push(new League("Tipico Bundesliga", "Austria", "http://www.betexplorer.com/soccer/austria/tipico-bundesliga"));
    urls.push(new League("Erste Liga", "Austria", "http://www.betexplorer.com/soccer/austria/erste-liga"));

    //Belarus
    urls.push(new League("Vysshaya Liga", "Belarus", "http://www.betexplorer.com/soccer/belarus/vysshaya-liga"));

    //Belgium
    urls.push(new League("Jupiler League", "Belgium", "http://www.betexplorer.com/soccer/belgium/jupiler-league"));
    urls.push(new League("Proximus League", "Belgium", "http://www.betexplorer.com/soccer/belgium/proximus-league"));
    urls.push(new League("First Amateur Division", "Belgium", "http://www.betexplorer.com/soccer/belgium/first-amateur-division"));

    //Bolivia

    urls.push(new League("Division Professional", "Bolivia", "http://www.betexplorer.com/soccer/bolivia/division-profesional/"));

    //Bosnia
    urls.push(new League("Premier League", "Bosnia", "http://www.betexplorer.com/soccer/bosnia-and-herzegovina/premier-league"));

    //Brazil
    urls.push(new League("Premier League", "Brazil", "http://www.betexplorer.com/soccer/brazil/serie-a"));
    urls.push(new League("Premier League", "Brazil", "http://www.betexplorer.com/soccer/brazil/serie-b"));
    urls.push(new League("Premier League", "Brazil", "http://www.betexplorer.com/soccer/brazil/serie-c"));

    //Bulgaria
    urls.push(new League("Parva Liga", "Bulgaria", "http://www.betexplorer.com/soccer/bulgaria/parva-liga"));
    urls.push(new League("Vtora Liga", "Bulgaria", "http://www.betexplorer.com/soccer/bulgaria/vtora-liga"));

    //Chile
    urls.push(new League("Primera Division", "Chile", "http://www.betexplorer.com/soccer/chile/primera-division"));

    //China
    urls.push(new League("Super League", "China", "http://www.betexplorer.com/soccer/china/super-league"));
    urls.push(new League("Jia League", "China", "http://www.betexplorer.com/soccer/china/jia-league"));

    //Colombia
    urls.push(new League("Liga Aguila", "Colombia", "http://www.betexplorer.com/soccer/colombia/liga-aguila"));

    //Croatia
    urls.push(new League("1. HNL", "Croatia", "http://www.betexplorer.com/soccer/croatia/1-hnl"));

    //Cyprus
    urls.push(new League("First Division", "Cyprus", "http://www.betexplorer.com/soccer/cyprus/first-division"));

    //Czech Republic
    urls.push(new League("1. Liga", "Czech Republic", "http://www.betexplorer.com/soccer/czech-republic/1-liga"));
    urls.push(new League("Division 2", "Czech Republic", "http://www.betexplorer.com/soccer/czech-republic/division-2"));

    //Denmark
    urls.push(new League("Superliga", "Denmark", "http://www.betexplorer.com/soccer/denmark/superliga"));
    urls.push(new League("1st Division", "Denmark", "http://www.betexplorer.com/soccer/denmark/1st-division"));
    urls.push(new League("2nd Division - Group 1", "Denmark", "http://www.betexplorer.com/soccer/denmark/2nd-division-group-1"));
    urls.push(new League("2nd Division - Group 2", "Denmark", "http://www.betexplorer.com/soccer/denmark/2nd-division-group-2"));
    urls.push(new League("2nd Division - Group 3", "Denmark", "http://www.betexplorer.com/soccer/denmark/2nd-division-group-3"));

    //Ecuador
    urls.push(new League("Serie A", "Ecuador", "http://www.betexplorer.com/soccer/ecuador/serie-a"));

    //Egypt
    urls.push(new League("Premier League", "Egypt", "http://www.betexplorer.com/soccer/egypt/premier-league"));

    //England
    urls.push(new League("Premier League", "England", "http://www.betexplorer.com/soccer/england/premier-league"));
    urls.push(new League("Championship", "England", "http://www.betexplorer.com/soccer/england/championship"));
    urls.push(new League("League One", "England", "http://www.betexplorer.com/soccer/england/league-one"));
    urls.push(new League("League Two", "England", "http://www.betexplorer.com/soccer/england/league-two"));
    urls.push(new League("Vanarama National League", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league"));
    urls.push(new League("Vanarama National League North", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league-north"));
    urls.push(new League("Vanarama National League South", "England", "http://www.betexplorer.com/soccer/england/vanarama-national-league-south"));
    urls.push(new League("Southern Premier League", "England", "http://www.betexplorer.com/soccer/england/southern-premier-league"));
    urls.push(new League("Northern Premier League", "England", "http://www.betexplorer.com/soccer/england/northern-premier-league"));
    urls.push(new League("Bostik League", "England", "http://www.betexplorer.com/soccer/england/bostik-league/"));

    //Estonia
    urls.push(new League("Meistrliiga", "Estonia", "http://www.betexplorer.com/soccer/estonia/meistriliiga"));
    urls.push(new League("Esiliiga", "Estonia", "http://www.betexplorer.com/soccer/estonia/esiliiga"));

    //Farao Islands
    urls.push(new League("Premier League", "Farao Islands", "http://www.betexplorer.com/soccer/faroe-islands/premier-league/"));

    //Finland
    urls.push(new League("Veikkausliiga", "Finland", "http://www.betexplorer.com/soccer/finland/veikkausliiga"));
    urls.push(new League("Ykkonen", "Finland", "http://www.betexplorer.com/soccer/finland/ykkonen"));
    urls.push(new League("Kakkonen Group A", "Finland", "http://www.betexplorer.com/soccer/finland/kakkonen-group-a"));
    urls.push(new League("Kakkonen Group B", "Finland", "http://www.betexplorer.com/soccer/finland/kakkonen-group-b"));
    urls.push(new League("Kakkonen Group C", "Finland", "http://www.betexplorer.com/soccer/finland/kakkonen-group-c"));

    //France
    urls.push(new League("Ligue 1", "France", "http://www.betexplorer.com/soccer/france/ligue-1"));
    urls.push(new League("Ligue 2", "France", "http://www.betexplorer.com/soccer/france/ligue-2"));
    urls.push(new League("National", "France", "http://www.betexplorer.com/soccer/france/national"));

    //FYR of Macedonia
    urls.push(new League("First League", "FYR of Macedonia", "http://www.betexplorer.com/soccer/fyr-of-macedonia/first-league"));

    //Georgia
    urls.push(new League("Erovnuli Liga", "Georgia", "http://www.betexplorer.com/soccer/georgia/erovnuli-liga"));

    //Germany
    urls.push(new League("Bundesliga", "Germany", "http://www.betexplorer.com/soccer/germany/bundesliga"));
    urls.push(new League("2. Bundesliga", "Germany", "http://www.betexplorer.com/soccer/germany/2-bundesliga"));
    urls.push(new League("3. Liga", "Germany", "http://www.betexplorer.com/soccer/germany/3-liga"));
    urls.push(new League("Regionalliga North", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-north"));
    urls.push(new League("Regionalliga Nordost", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-nordost"));
    urls.push(new League("Regionalliga West", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-west"));
    urls.push(new League("Regionalliga Sudwest", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-sudwest"));
    urls.push(new League("Regionalliga Bayern", "Germany", "http://www.betexplorer.com/soccer/germany/regionalliga-bayern"));

    //Greece
    urls.push(new League("Super League", "Greece", "http://www.betexplorer.com/soccer/greece/super-league"));
    urls.push(new League("Football League", "Greece", "http://www.betexplorer.com/soccer/greece/football-league"));

    //Hungary
    urls.push(new League("OTP Bank liga", "Hungary", "http://www.betexplorer.com/soccer/hungary/otp-bank-liga"));

    //Iceland
    urls.push(new League("Pepsideild", "Iceland", "http://www.betexplorer.com/soccer/iceland/pepsideild"));
    urls.push(new League("Inkasso-deildin", "Iceland", "http://www.betexplorer.com/soccer/iceland/inkasso-deildin"));

    //Ireland
    urls.push(new League("Premier Division", "Ireland", "http://www.betexplorer.com/soccer/ireland/premier-division"));
    urls.push(new League("Division 1", "Ireland", "http://www.betexplorer.com/soccer/ireland/division-1"));

    //Israel
    urls.push(new League("Ligat ha'Al", "Israel", "http://www.betexplorer.com/soccer/israel/ligat-ha-al"));

    //Italy
    urls.push(new League("Serie A", "Italy", "http://www.betexplorer.com/soccer/italy/serie-a"));
    urls.push(new League("Serie B", "Italy", "http://www.betexplorer.com/soccer/italy/serie-b"));
    urls.push(new League("Serie C - Group A", "Italy", "http://www.betexplorer.com/soccer/italy/serie-c-group-a/"));
    urls.push(new League("Serie C - Group B", "Italy", "http://www.betexplorer.com/soccer/italy/serie-c-group-b/"));
    urls.push(new League("Serie C - Group C", "Italy", "http://www.betexplorer.com/soccer/italy/serie-c-group-c/"));

    //Japan
    urls.push(new League("J-League", "Japan", "http://www.betexplorer.com/soccer/japan/j-league"));
    urls.push(new League("J-League Division 2", "Japan", "http://www.betexplorer.com/soccer/japan/j-league-division-2"));

    //Latvia
    urls.push(new League("SynotTip Virsliga", "Latvia", "http://www.betexplorer.com/soccer/latvia/synottip-virsliga"));

    //Lithuania
    urls.push(new League("A Lyga", "Lithuania", "http://www.betexplorer.com/soccer/lithuania/a-lyga"));

    //Luxembourg
    urls.push(new League("National Division", "Luxembourg", "http://www.betexplorer.com/soccer/luxembourg/national-division"));

    //Malaysia
    urls.push(new League("Super League", "Malaysia", "http://www.betexplorer.com/soccer/malaysia/super-league"));

    //Malta
    urls.push(new League("Premier League", "Malta", "http://www.betexplorer.com/soccer/malta/premier-league"));

    //Morocco
    urls.push(new League("Botola Pro", "Morocco", "http://www.betexplorer.com/soccer/morocco/botola-pro/"));

    //Mexico
    urls.push(new League("Primera Division", "Mexico", "http://www.betexplorer.com/soccer/mexico/primera-division"));
    urls.push(new League("Primera Division", "Mexico", "http://www.betexplorer.com/soccer/mexico/liga-de-ascenso"));

    //Netherlands
    urls.push(new League("Eredivisie", "Netherlands", "http://www.betexplorer.com/soccer/netherlands/eredivisie"));
    urls.push(new League("Eerste Divisie", "Netherlands", "http://www.betexplorer.com/soccer/netherlands/eerste-divisie"));

    //New Zealand
    urls.push(new League("Football Championship", "New Zealand", "http://www.betexplorer.com/soccer/new-zealand/football-championship"));

    //Northern Ireland
    urls.push(new League("NIFL Premiership", "Northern Ireland", "http://www.betexplorer.com/soccer/northern-ireland/nifl-premiership"));

    //Norway
    urls.push(new League("Eliteserien", "Norway", "http://www.betexplorer.com/soccer/norway/eliteserien"));
    urls.push(new League("OBOS-ligaen", "Norway", "http://www.betexplorer.com/soccer/norway/obos-ligaen"));
    urls.push(new League("Division 2 - Group 1", "Norway", "http://www.betexplorer.com/soccer/norway/division-2-group-1"));
    urls.push(new League("Division 2 - Group 2", "Norway", "http://www.betexplorer.com/soccer/norway/division-2-group-2"));

    //Peru
    urls.push(new League("Primera Division", "Peru", "http://www.betexplorer.com/soccer/peru/primera-division"));

    //Poland
    urls.push(new League("Ekstraklasa", "Poland", "http://www.betexplorer.com/soccer/poland/ekstraklasa"));
    urls.push(new League("Division 1", "Poland", "http://www.betexplorer.com/soccer/poland/division-1"));

    //Portugal
    urls.push(new League("Primeira Liga", "Portugal", "http://www.betexplorer.com/soccer/portugal/primeira-liga"));
    urls.push(new League("Segunda Liga", "Portugal", "http://www.betexplorer.com/soccer/portugal/segunda-liga"));

    //Romania
    urls.push(new League("Liga 1", "Romania", "http://www.betexplorer.com/soccer/romania/liga-1"));

    //Russia
    urls.push(new League("Premier League", "Russia", "http://www.betexplorer.com/soccer/russia/premier-league"));
    urls.push(new League("Division 1", "Russia", "http://www.betexplorer.com/soccer/russia/division-1"));
    urls.push(new League("Division 2 - South", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-south/"));
    urls.push(new League("Division 2 - East", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-east/"));
    urls.push(new League("Division 2 - Center", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-center/"));
    urls.push(new League("Division 2 - West", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-west/"));
    urls.push(new League("Division 2 - Ural-Povolzhye", "Russia", "http://www.betexplorer.com/soccer/russia/division-2-ural-povolzhye/"));

    //Saudi Arabia
    urls.push(new League("Saudi Professional League", "Saudi Arabia", "http://www.betexplorer.com/soccer/saudi-arabia/saudi-professional-league/"));


    //Scotland
    urls.push(new League("Premiership", "Scotland", "http://www.betexplorer.com/soccer/scotland/premiership"));
    urls.push(new League("Championship", "Scotland", "http://www.betexplorer.com/soccer/scotland/championship"));
    urls.push(new League("League One", "Scotland", "http://www.betexplorer.com/soccer/scotland/league-one"));
    urls.push(new League("League Two", "Scotland", "http://www.betexplorer.com/soccer/scotland/league-two"));
    urls.push(new League("Lowland League", "Scotland", "http://www.betexplorer.com/soccer/scotland/lowland-league"));
    urls.push(new League("Highland League", "Scotland", "http://www.betexplorer.com/soccer/scotland/highland-league"));

    //Serbia
    urls.push(new League("Super Liga", "Serbia", "http://www.betexplorer.com/soccer/serbia/super-liga"));
    urls.push(new League("Prva Liga", "Serbia", "http://www.betexplorer.com/soccer/serbia/prva-liga"));

    //Slovakia
    urls.push(new League("Fortuna Liga", "Slovakia", "http://www.betexplorer.com/soccer/slovakia/fortuna-liga"));
    urls.push(new League("2. Liga - West", "Slovakia", "http://www.betexplorer.com/soccer/slovakia/2-liga-west"));
    urls.push(new League("2. Liga - East", "Slovakia", "http://www.betexplorer.com/soccer/slovakia/2-liga-east"));

    //Slovenia
    urls.push(new League("Prva Liga", "Slovenia", "http://www.betexplorer.com/soccer/slovenia/prva-liga"));

    //South Africa
    urls.push(new League("Premier League", "South Africa", "http://www.betexplorer.com/soccer/south-africa/premier-league"));

    //South-Korea
    urls.push(new League("K-League 1", "South-Korea", "http://www.betexplorer.com/soccer/south-korea/k-league-1/"));
    urls.push(new League("K-League 2", "South-Korea", "http://www.betexplorer.com/soccer/south-korea/k-league-2/"));
    urls.push(new League("National League", "South-Korea", "http://www.betexplorer.com/soccer/south-korea/national-league"));

    //Spain
    urls.push(new League("LaLiga", "Spain", "http://www.betexplorer.com/soccer/spain/laliga"));
    urls.push(new League("LaLiga2", "Spain", "http://www.betexplorer.com/soccer/spain/laliga2"));
    urls.push(new League("Segunda Division B - Group 1", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-1"));
    urls.push(new League("Segunda Division B - Group 2", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-2"));
    urls.push(new League("Segunda Division B - Group 3", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-3"));
    urls.push(new League("Segunda Division B - Group 4", "Spain", "http://www.betexplorer.com/soccer/spain/segunda-division-b-group-4"));

    //Sweden
    urls.push(new League("Allsvenskan", "Sweden", "http://www.betexplorer.com/soccer/sweden/allsvenskan"));
    urls.push(new League("Superettan", "Sweden", "http://www.betexplorer.com/soccer/sweden/superettan"));
    urls.push(new League("Division 1 - Norra", "Sweden", "http://www.betexplorer.com/soccer/sweden/division-1-norra"));
    urls.push(new League("Division 1 - Södra", "Sweden", "http://www.betexplorer.com/soccer/sweden/division-1-sodra"));

    //Switzerland
    urls.push(new League("Super League", "Switzerland", "http://www.betexplorer.com/soccer/switzerland/super-league"));
    urls.push(new League("Challenge League", "Switzerland", "http://www.betexplorer.com/soccer/switzerland/challenge-league"));

    //Thailand
    urls.push(new League("Thai Premier League", "Thailand", "http://www.betexplorer.com/soccer/thailand/thai-premier-league/"));

    //Turkey
    urls.push(new League("Super Lig", "Turkey", "http://www.betexplorer.com/soccer/turkey/super-lig"));
    urls.push(new League("TFF 1. Lig", "Turkey", "http://www.betexplorer.com/soccer/turkey/tff-1-lig"));

    //Ukraine
    urls.push(new League("Premier League", "Ukraine", "http://www.betexplorer.com/soccer/ukraine/premier-league/"));

    //USA
    urls.push(new League("MLS", "USA", "http://www.betexplorer.com/soccer/usa/mls"));
    urls.push(new League("USL", "USA", "http://www.betexplorer.com/soccer/usa/usl/"));

    //Wales
    urls.push(new League("Premier League", "Wales", "http://www.betexplorer.com/soccer/wales/premier-league"));


    //145 ligaer

    return urls;
  }

});
