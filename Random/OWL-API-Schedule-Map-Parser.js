json.data.stages.reduce((res, stage) => ({ ...res, [stage.name]: [...new Set(stage.matches.reduce((res, match) => ([...res, ...match.games.map(game => game.attributes.map)]), []))]}), {})