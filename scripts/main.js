
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
             "@weapon that @action",
             "@adj @weapon made of @material",
             "@adj @weapon with @attach",
             "@adj @weapon of @noun",
             "@adj @weapon of @race"+"-slaying",
             "@adj @weapon that @action",
             
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
             "sabre",
             "greatsword",
             "shield",
             //"nunchucks",
             "hatchet",
             "battle axe",
             "warhammer",
             "wand",
             "pike",
             "javelin",
             "glaive",
             "chain",
             "stick",
             "cleaver",
             "cutlass",
             "falchion",
             "greataxe",
             "bow",
             "crossbow",
             "shuriken",
             "sling",
             "slingshot",
             "net",
             
             
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
             "talking",
             "pointy",
             "ceremonial",
             "indestructible",
             "makeshift",
             "precise",
             "lucky",
             "spiked",
             "shoddy",
             "damaged",
             "demonic",
             "superior",
             "celestial",
             "aerodynamic",
             "crippling",
             "light",
             "heavy",
             "cursed",
             "holy",
             "blessed",
             "explosive",
             "bejeweled",
             "tiny",
             "massive",
             "inconveniently large",
             "self-cleaning",
             "flying",
             "divine",
             "planar",
             "badass",
             "critical",
             "crushing",
             
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
             "wings",
             "tassels",
             "an engraving",
             "an eye",
             "eyes",
             "rust",
             "a mind of its own",
             "a bad attitude",
             "a demon trapped inside",
             
             
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
            "gold",
            "crystal",
            "tin",
            "steel, folded 1000 times",
            
            
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
            "calamity",
            "vengeance",
            "revenge",
            "prophecy",
            "the gods",
            "the apocalypse",
            "slaying",
            "pacifism",
            
            
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
            "titan",
        ], 
        
        action:  [
            "shoots fire",
            "transforms into a fucking @weapon",
            "transforms into a fucking @adj @weapon",
            "eats souls",
            "hums softly",
            "vibrates",
            "sings",
            "talks",
            "glows",
            "shoots lightning",
            "duplicates",
            "hums loudly",
            "flies",
            "comes back when you throw it",
            "grows",
            "shrinks",
            
        ],
            
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});