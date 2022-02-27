function translating (){
	lang = document.querySelector("#selectorL"); //La langue est prise selon la valeur du select

	//Selection des différentes choses à traduire
	h1trad = document.querySelector("h1");

	descTrad = document.querySelectorAll("p[data-description]");
	filterTrad = document.querySelectorAll(".filtre-container strong");
	firstBrewedTrad = document.querySelectorAll("p[data-first-brewed]");


	if (lang.value == "fr"){
		h1trad.innerHTML = "FILTRE À BIÈRES BREWDOG"
		console.log(filterTrad[0].innerText);

		filterTrad[0].innerText = "Tout";
		filterTrad[1].innerText = "Moins de 6°";
		filterTrad[2].innerText = "Plus de 6°";
		filterTrad[3].innerText = "Blanches";
		filterTrad[4].innerText = "Blondes";
		filterTrad[5].innerText = "Ambrées";
		filterTrad[6].innerText = "Brunes";


		descTrad[0].innerText = "Une IPA légère, croquante et amère brassée avec des houblons anglais et américains. Un petit lot brassé une seule fois.";
		descTrad[1].innerText = "Un punk titillant, névrosé et peroxydé d'une Pale Ale. Combinant attitude, style, substance et un peu de faible estime de soi pour faire bonne mesure ; que dirait ta mère ? L'attrait séduisant du houblon impertinent du fruit de la passion s'avère trop difficile à résister. Tout cela avant même d'en venir au fait qu'il n'y a pas d'additifs, de conservateurs, de pasteurisation ou de ficelles. Le tout enveloppé avec la morsure habituelle de BrewDog et une touche imaginative.";
		descTrad[2].innerText = "Les agrumes japonais intensifient la nature acidulée de ce classique allemand.";
		descTrad[3].innerText = "Notre série Unleash the Yeast était une expérience épique sur les différences d'arôme et de saveur fournies en changeant votre levure. Nous avons préparé un moût avec une légère note de caramel et une saveur de biscuit grillé, et l'avons houblonné avec de l'Amarillo et du Centennial pour une amertume d'agrumes. Tout le reste est dû à la levure. La levure Pilsner fermente sans esters fruités ni phénols épicés, bien qu'elle puisse ajouter une touche de caramel au beurre.";
		descTrad[4].innerText = "Une Pilsner impériale en collaboration avec des auteurs de bière. Tradition. Hommage. Révolution. Nous voulions mettre en valeur l'épine dorsale impressionnante de la tradition brassicole tchèque, le noble houblon Saaz, et aussi tirer notre chapeau aux bières modernes qui font vibrer notre monde et aux personnes qui les fabriquent.";
		descTrad[5].innerText = "Re-brassée comme une saison printanière, cette bière - qui est apparue à l'origine comme une création d'actionnaire d'Equity Punk - conserve son côté épicé et fruité de marque. Un mélange parfait de Belgian Saison et d'US IPA, de grains de poivre concassés et de miel de bruyère sont également ajoutés pour produire une bière véritablement unique.";
		descTrad[6].innerText = "Une Imperial Black Belgian Ale vieillie dans de vieux fûts de whisky écossais Invergordon avec des montagnes de framboises, de myrtilles et de mûres dans chaque fût. Décadente mais légère et sèche, cette bière constituerait une base fantastique pour le vieillissement sur à peu près n'importe quel fruit noir - nous avons utilisé des framboises, des myrtilles et des mûres parce qu'elles étaient locales.";
		descTrad[7].innerText = "Le faux est le nouveau noir. Le faux est là où il se trouve. Fake Art, fausses marques, faux seins et fausses bières blondes. Nous voulons jouer notre rôle dans les terribles retombées du Lager Dream. Dites bonjour à Fake Lager - un faux chef-d'œuvre floral et piquant du 21e siècle avec une amertume BrewDog ajoutée.";
		descTrad[8].innerText = "Scotch ale impériale vieillie en fût de whisky. Bière parfaite lorsque la pluie tombe de côté. La réglisse, la prune et les raisins secs tempèrent l'alcool réchauffant, produisant une bière capable de retenir le froid écossais.";
		descTrad[9].innerText = "Le bon vieux Bramling Cross est élégant, raffiné, assuré, (ennuyeux) et sobre. Sobre, c'est à moins que vous ne sachiez la lumière du jour d'une bière avec. C'est Bramling Cross réinventé et réinventé, et montre exactement ce qui peut être fait avec le houblon anglais si vous en utilisez suffisamment. La pauvre Bramling Cross se perd normalement dans un flot lamentable de bières brunes conformistes fabriquées par des brasseurs de bière en fût endormis. Mais plus maintenant. Cette bière montre que le houblon britannique a une âme et est une émeute fruitée de mûres, de poires et de prunes. Cela me rappelle la confiture de ronces, pommes et gingembre que ma grand-mère faisait.";
		descTrad[10].innerText = "L'idée originale de notre petit brasseur, George Woods. Une Scotch Ale infusée de sucre au lait dangereusement buvable.";
		descTrad[11].innerText = "À mi-chemin entre une India Pale Ale et une Stout, ce style particulier est celui que nous aimons vraiment. Les IPA noires sont une excellente vitrine pour les compétences de notre équipe de brasseurs, équilibrant autant de saveurs complexes et tordues au même moment. Les agrumes, la mangue et le pin du houblon - trois de nos favoris de tous les temps - jouent contre la sécheresse torréfiée de la facture de malt à chaque tour.";
		descTrad[12].innerText = "Une bière maltée noire délicieusement robuste avec une saveur décadente de cacao noir et sec qui offre une toile de fond séduisante aux houblons Cascade.";
		descTrad[13].innerText = "Une fusion de saveurs de malt caramel et de houblon néo-zélandais percutant. Une bière de session dans laquelle vous pouvez vous mettre les dents.";
		descTrad[14].innerText = "Cette recette est pour la base Triple Belge. Un mélange de deux énormes bières vieillies en fût de chêne – la moitié d'une Tripel belge houblonnée et la moitié d'une Triple India Pale Ale. Toutes deux vieillies en fûts de whisky single grain pendant deux ans et assemblées, chaque bière apporte son propre caractère au mélange. La Tripel belge est chargée d'esters complexes épicés et fruités et d'un caractère de houblon d'agrumes percutant.";
		descTrad[15].innerText = "Une avalanche de variétés de houblon transcontinentales confère à ce porter un arôme complexe d'épices, de résine et d'agrumes, avec une énorme facture de malt offrant un contrepoint torréfié complexe. En creusant plus profondément dans la saveur, on obtient du caramel cendré, du chocolat amer et des notes de fumée de bois.";
		descTrad[16].innerText = "Notre sixième Abstrakt, cette IPA noire impériale combinait des malts sombres avec un triple dry-hop monumental, en utilisant une équipe de stars de certains de nos houblons américains préférés. Rôti et résineux.";
		descTrad[17].innerText = "Les niveaux de houblon varient dans toute la gamme. Nous aimons le houblon, donc les quatre bières sont de grosses badasses amères, mais en ajustant la quantité de chaque houblon utilisée plus tard dans l'ébullition et pendant le houblonnage à sec, nous pouvons équilibrer l'épine dorsale maltée avec des saveurs inattendues. Simcoe est utilisé dans le bain à remous pour les quatre bières, et pourtant prête toujours des caractères différents à chacune";
		descTrad[18].innerText = "Nous avons envoyé cette bière en Norvège où elle était connue sous le nom de « Bonjour, je m'appelle Censuré ». Vous pouvez vous faire votre propre opinion sur le pourquoi. Cette infusion était une explosion de baies rouges, avec un bord amer de résineux superposé à une acidité de baies sèches.";
		descTrad[19].innerText = "Bière impériale de blé / Weizenbock brassée par un Allemand nostalgique en pantalon de cuir. Pensez au pain aux bananes, au chewing-gum et à David Hasselhoff.";
		descTrad[20].innerText = "Notre version du classique allemand Kristallweizen. Une bière de blé allemande claire, des couches de chewing-gum et de vanille parfaitement équilibrées avec les houblons américains et néo-zélandais.";
		descTrad[21].innerText = "BrewDog et Mikkeller, deux des brasseurs les plus expérimentaux d'Europe qui repoussent les limites, ont uni leurs forces pour produire une bière rebelle qui combinait leurs talents respectifs et leurs compétences brassicoles. Le Barley Wine à 12,5% a bien fermenté et les levures de champagne l'ont rapproché de plus en plus des 12,5%. La bière était brassée avec une seule variété de houblon et allait être partiellement vieillie en fûts de chêne.";
		descTrad[22].innerText = "La magie noire et puissante d'Islay imprègne cette sensation tropicale d'une IPA. En utilisant la Punk IPA originale comme base, nous avons augmenté l'ABV à 8%, ce qui lui donne une épine dorsale supplémentaire pour résister à la fumée tourbée importée directement d'Islay.";
		descTrad[23].innerText = "La fin de l'histoire : Le nom dérive du célèbre ouvrage du philosophe Francis Fukuyama, c'est à la bière ce que la démocratie est à l'histoire. Complexité définie. Floral, pamplemousse, caramel et clou de girofle sont intensifiés par la chaleur alcoolisée.";
		descTrad[24].innerText = "2008 Bière prototype, une bière de blé à 4,7% avec des baies de genièvre écrasées et des zestes d'agrumes.";
		
	} else if (lang.value == "en"){
		h1trad.innerHTML = "BREWDOG BEERS FILTER LIST";
		console.log(filterTrad[0].innerText);

		filterTrad[0].innerText = "All";
		filterTrad[1].innerText = "Less than 6 °";
		filterTrad[2].innerText = "More than 6 °";
		filterTrad[3].innerText = "White";
		filterTrad[4].innerText = "Blond";
		filterTrad[5].innerText = "Amber";
		filterTrad[6].innerText = "Brown";


		descTrad[0].innerText = "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";
		descTrad[1].innerText = "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.";
		descTrad[2].innerText = "Japanese citrus fruit intensifies the sour nature of this German classic.";
		descTrad[3].innerText = "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.";
		descTrad[4].innerText = "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.";
		descTrad[5].innerText = "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.";
		descTrad[6].innerText = "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.";
		descTrad[7].innerText = "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.";
		descTrad[8].innerText = "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.";
		descTrad[9].innerText = "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.";
		descTrad[10].innerText = "The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.";
		descTrad[11].innerText = "Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.";
		descTrad[12].innerText = "A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.";
		descTrad[13].innerText = "A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.";
		descTrad[15].innerText = "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.";
		descTrad[16].innerText = "An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.";
		descTrad[17].innerText = "Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.";
		descTrad[18].innerText = "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each";
		descTrad[19].innerText = "We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.";
		descTrad[20].innerText = "Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.";
		descTrad[21].innerText = "Our take on the classic German Kristallweizen. A clear German wheat beer, layers of bubblegum and vanilla perfectly balanced with the American and New Zealand hops.";
		descTrad[22].innerText = "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.";
		descTrad[23].innerText = "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.";
		descTrad[24].innerText = "The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.";
		descTrad[24].innerText = "2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.";
	}
	
}