
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "It's a fucking",
             "Check this shit out, a fucking",
         ],
         response: [
             "Already fucking seen one",
             "Give me a-fucking-nother one",
             "Don't really give a fuck",
         ],
         template: [
             "@adj @weapon",
             "@weapon with @attach",
             "@weapon made of @material",
             "@weapon of @noun",
             
         ],
         weapon: [
             "sword",
             "club",
             "knife",
             "arrow",
             "rock",
             "war axe",
             "hammer",
             "mace",
             "tooth",
             "scythe",
             "flail",
             "staff",
             "spear",
             "whip",
             "halberd",
             "maul",
             "rapier",
             "longsword",
             "shortsword",
             "sickle",
             "trident",
             "scimitar",
             "shovel",
             "pickaxe",
             "gauntlet",
             "baton",
             "lance",
             
             
             
         ],
         adj: [
             "magical",
             "poisonous",
             "bloody",
             "broken",
             "masterwork",
             "legendary",
             "flaming",
             "mythical",
             "dwarven",
             "orcish",
             "elven",
             "vorpal",
             "acid",
             "slimy",
             "glowing",
             
         ],
         attach: [
             "blood on it",
             "spikes",
             "sparkles",
             "a mouth",
             "teeth",
             "runes",
             "elaborate decoration",
             "a hook",
             
         ], 
         material: [
            "glass",
            "diamond",
            "fire",
            "yarn",
            "meat",
            "bone",
            "ice",
            "stone",
            "silver",
            "meteorite",
            "shadow",
            
        ],
        noun: [
            "annihilation",
            "justice",
            "evil",
            "war",
            "massacre",
            "honor",
            "light and shadow",
            "light",
            "darkness",
            "legend",
            "hope",
            "doom",
            "destiny",
            "the night",
            "sacrifice",
            
        ], 
            
            
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});