module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		"@babel/preset-typescript",
		"next/babel"
	],
	"plugins": [
		[
			"babel-plugin-styled-components",
			{
				"ssr": true,
				"displayName": true
			}
		]
	],
	"env": {
		"teste": {
			"plugins": [
				[
					"babel-plugin-styled-components", {
						"ssr": false,
						"displayName": false
					}
				]
			]
		}
	}
}
