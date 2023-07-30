var streamQueue = "query bracketQuery($slug: String){tournament(slug: $slug){id name streamQueue{stream{streamName streamGame isOnline}	sets{id	fullRoundText slots {id entrant {id name participants{id prefix gamerTag} }} phaseGroup{id displayIdentifier phase{id name}}}}}}";

var top8 = "query bracketQuery($slug: String, $phaseGroupId: ID!, $perPage: Int!){tournament(slug: $slug){id name} phaseGroup(id: $phaseGroupId) {phase {id} id sets(sortType: CALL_ORDER, perPage: $perPage){pageInfo {total} nodes {id round fullRoundText slots {id standing{stats{score {value}}} entrant {id name participants {id gamerTag prefix}}}}}}}";

var top8Countries = "query bracketQuery($slug: String, $phaseGroupId: ID!, $perPage: Int!){tournament(slug: $slug){id name} phaseGroup(id: $phaseGroupId) {phase {id} id sets(sortType: CALL_ORDER, perPage: $perPage){pageInfo {total} nodes {id round fullRoundText slots {id standing{stats{score {value displayValue}}} entrant {id name participants {id gamerTag prefix user{location{country state}}}}}}}}}";

var roundRobin = "query roundRobinStandings($slug: String, $phaseGroupId: ID!, $perPage: Int!) {tournament(slug: $slug) {id name} phaseGroup(id: $phaseGroupId) {id standings(query: {perPage: $perPage, page: 1}) {nodes {id entrant {id name participants {gamerTag prefix} seeds {id setRecordWithoutByes(phaseGroupId: $phaseGroupId)}}}}}}";