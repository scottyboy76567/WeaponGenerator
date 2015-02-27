
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
             "@weapon of @race"+"-slaying",
             
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
             "gnomish",
             "rusted",
             
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
            "shadows",
            "wood",
            "obsidian",
            
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
        
        race: [
            "orc",
            "goblin",
            "rat",
            "dragon",
            "demon",
            "giant",
            "owlbear",
            "zombie",
            "ghoul",
            "human",
            "skeleton",
            "elf",
            "dwarf",
            "gnome",
            "fairy",
        ], 
            
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});