// Add your JavaScript and D3 code here
var width = 1400, height = 650; // Increased size

// Define map projection
var projection = d3.geoMercator()
    .scale(400) // Adjusted scale for the larger map
    .translate([width / 2, height / 4]); // Adjusted to center the map

// Define path generator
var path = d3.geoPath().projection(projection);

// Create SVG element
var svg = d3.select("#map")
    .attr("width", width)
    .attr("height", height)
    .style("display", "block") // Ensure it's a block-level element
    .style("margin", "0 auto"); // Center the SVG in the container

        // Load in GeoJSON data
        d3.json('map.json').then(function(geojson) {
            // Bind data and create one path per GeoJSON feature
            svg.selectAll("path")
                .data(geojson.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", "country")
                .on("mouseover", function(event, d) {
                    d3.select("#tooltip")
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 15) + "px")
                        .style("display", "block")
                        .text(d.properties.name);
                })
                .on("mouseout", function() {
                    d3.select("#tooltip").style("display", "none");
                })
                .on("click", function(event, d) {
                    var countryData = sampleData.find(function(data) {
                        return data.country === d.properties.name;
                    });
                    if (countryData) {
                        displayEventDetails(countryData);
                    }
                });
        });

        // Load your sample data here
        var sampleData = [
    {
        "country": "Argentina",
        "period": "Dictatorship (1976-1983)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "international armed conflict",
            "truth commission",
            "state museum",
            "memorial sites"
        ],
        "actors": [
            "Argentine Armed Forces",
            "a diverse spectrum of groups and parties associated with Peronism",
            "social organizations",
            "guerrilla movements active since the previous decade"
        ],
        "key_historical_events": {
            "1973-1976": "A period of three Peronist administrations during which the country experienced a climate of violence and generalised instability, as part of the struggle for power between the different factions of this movement. The end of this period was marked by a series of politically motivated deaths.",
            "1976": "Coup d\u2019\u00e9tat. On 24 March, the Argentine armed forces, led by Jorge Rafael Videla, overthrew Mar\u00eda Estela Mart\u00ednez de Per\u00f3n and installed a military junta in the government, ushering in a new period of dictatorship in the country. The state apparatus was militarised, and systematic political persecution of the population began. The number of arrests, murders, cases of torture and abductions of children during this period are considered evidence of state terrorism. The exact number of victims is still disputed, but estimates put the number of disappeared prisoners at around 30,000.",
            "1977": "Groups of mothers of disappeared prisoners began to meet regularly in the Plaza de Mayo in front of the Ministry of the Interior.",
            "1979": "A mission from the Inter-American Commission on Human Rights visited the country. It investigated cases of forcibly disappeared prisoners and collected numerous testimonies from relatives of the victims.",
            "1982": "A year during which numerous demonstrations against the dictatorship occurred, with mass marches such as the Marcha pan, paz y trabajo (in April) and the Marcha por la vida (in October).",
            "1983": "In December, after elections, Ra\u00fal Alfons\u00edn is sworn in as president."
        },
        "memory_initiatives": [
            "Nunca M\u00e1s (1984, with reprints): a report published as a result of the work of CONADEP, which established the number of forcibly disappeared prisoners at around 9,000, a figure that would increase over the years.",
            "Ley 25.779 (2003): a law that nullifies two other instruments, (the laws 23.492 \u201cde Punto Final\u201d, from 1986; and 23.532, \u201cde Obediencia Debida\u201d, from 1987) which limited legal action against members of the armed forces for crimes against humanity committed during the dictatorship.",
            "Ley 25.633 (2002), Ley 26.085 (2006): two laws establishing March 24 as \u201cD\u00eda Nacional de la Memoria por la Verdad y la Justicia\u201d, a public holiday in memory of the victims of the dictatorship.",
            "Ley 26.691 de Preservaci\u00f3n, Se\u00f1alizaci\u00f3n y Difusi\u00f3n de Sitios de Memoria del terrorismo de Estado (2011): a law that designates detention, torture and extermination centres as sites of remembrance, to be publicly known and openly discussed."
        ],
        "sites_of_memory": [
            "Espacio para la Memoria y para la Promoci\u00f3n y Defensa de los Derechos Humanos: a public space located in a former detention centre (the Escuela de Mec\u00e1nica de la Armada). It houses several public institutions, human rights bodies and organisations, including the Archivo de la Memoria and the Museo Sitio ESMA.",
            "Archivo Provincial por la Memoria \u2013 C\u00f3rdoba: a memorial located in what was once a clandestine detention centre in this province. It houses archives documenting the activities of state and social organisations during the dictatorship.",
            "Parque de la memoria: a public commemorative space, located to the north of Buenos Aires. The park houses the Monumento a las v\u00edctimas de terrorismo de Estado, with plaques bearing the names of some 9,000 victims. It also has a documentation centre and a digital archive."
        ],
        "organizations": [
            "Servicio Paz y Justicia Argentina (SERPAJ): an organisation that has been active since 1974. During the dictatorship, it provided sustained support for the cases of disappeared prisoners.",
            "Asamblea Permanente por los Derechos Humanos: a group formed in 1975, with members from different sectors, who worked together to receive and denounce cases of victims of state terrorism.",
            "Madres de la Plaza de Mayo: an organisation created in 1977 as a result of demands made by a group of women to the government regarding the situation of their disappeared children. It is still active today, although it is currently divided into two main branches.",
            "Comisi\u00f3n Nacional sobre la Desaparici\u00f3n de Personas (CONADEP): an official body created in 1983, at the beginning of Ra\u00fal Alfons\u00edn's government, to receive and investigate reports of disappeared prisoners and children abducted during the dictatorship."
        ],
        "issues_specific_to_the_country": [
            "You can include any specific issues for Argentina here."
        ]
    },
    {
        "country": "Bolivia",
        "period": "Military dictatorships (1964-1982)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "reparation law",
            "truth commission",
            "indigenous peoples"
        ],
        "actors": [
            "Bolivian armed forces, headed by different generals",
            "political parties",
            "workers' political organisations",
            "peasants' organisations",
            "Bolivian indigenous peoples, civil organisations"
        ],
        "key_historical_events": {
            "1964": "A military junta led by general Ren\u00e9 Barrientos overthrew V\u00edctor Paz Estenssoro and took control of the government.",
            "1967": "Masacre de San Juan. In June, during the celebration of the night of San Juan, military troops invaded the mining camps of Catavi, killing workers and their families.",
            "1969-1970": "After the death of Barrientos, general Alfredo Ovando took over the government, followed by general Juan Jos\u00e9 Torres.",
            "1971": "In a coup d'\u00e9tat, Colonel Hugo Banzer installed himself in the government and overthrew Torres. On 21 August, the day of the coup, violent clashes erupted in the country, and many people were killed in the repression.",
            "1974": "Masacre del Valle. The government sends in the army to repress peasant protests in Cochabamba. Groups of peasants are murdered in different places in the region.",
            "1975": "Moema Viezzer published Si me permiten hablar, a testimony by Domitila Barrios de Chungara, a miner, political leader, and survivor of the San Juan massacre.",
            "1978": "After Banzer's departure, a series of calls for elections and military coups occurred in the following years.",
            "1979": "Masacre de Todos Santos. At the beginning of November, Colonel Alberto Natusch leads a coup d'\u00e9tat. Numerous protests follow, which are violently suppressed by the army.",
            "1980": "In July, General Luis Garc\u00eda Meza and Colonel Luis Arce stage a coup d'\u00e9tat. Violent repression is unleashed against the population. Political leaders Marcelo Quiroga and Carlos Flores were murdered, and their bodies disappeared. Quiroga had promoted a trial to bring Banzer to justice.",
            "1982": "The military junta stepped down. Congress appointed Hern\u00e1n Siles Suazo, the candidate elected in 1980, as president."
        },
        "memory_initiatives": [
            "Decretos Supremos 19.241 (1982) y 19.734 (1983): Acts establishing the creation and continuity of the Comisi\u00f3n de Investigaci\u00f3n de Ciudadanos Desaparecidos Forzados.",
            "Ley 2.640 de resarcimiento excepcional a v\u00edctimas de violencia pol\u00edtica en periodos de gobiernos Inconstitucionales (2004): a law establishing a reparation mechanism for victims of political violence between 1964 and 1982. To date, 1,714 cases have been recognised as beneficiaries and around 4,500 more are under consideration."
        ],
        "sites_of_memory": [
            "Espacio de la Memoria Hist\u00f3rica de las Luchas del Pueblo Boliviano: a place of remembrance where public events are held, located on Laikakota Hill in La Paz."
        ],
        "organizations": [
            "Asamblea permanente de Derechos Humanos de Bolivia: an organisation founded in 1976 to defend and promote human rights.",
            "Asociaci\u00f3n de familiares de detenidos desaparecidos y m\u00e1rtires por la liberaci\u00f3n nacional (ASOFAMD): an organisation formed by relatives of victims of human rights violations during the dictatorships.",
            "Comisi\u00f3n Nacional de Investigaci\u00f3n de Desaparecidos Forzados de Bolivia: an official body set up in 1982 to investigate human rights abuses, which was disbanded before it could complete its work.",
            "Comisi\u00f3n de la Verdad: an official body created in 2017 to investigate human rights violations during the dictatorships.",
            "Plataforma de luchadores sociales y sobrevivientes de las dictaduras: an umbrella organisation that set up a tent in front of the Ministry of Justice in 2012 to demand reparations for victims. Its leader, Julio Llanos, died in 2019 after being attacked."
        ],
        "issues_specific_to_the_country": [
            "Bolivia was one of the first Latin American countries to set up a commission to investigate cases of violence, but it was never able to complete its work. It would take more than three decades for the next commission to carry out similar work."
        ]
    },
    {
        "country": "Brazil",
        "period": "Military dictatorship (1964-1985)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "amnesty law",
            "reparations law",
            "truth commission",
            "memorial sites"
        ],
        "actors": [
            "Brazilian state",
            "Brazilian Armed Forces",
            "various political parties, reduced to two legal parties for many years of the dictatorship",
            "several civil organizations"
        ],
        "key_historical_events": {
            "1964": "On March 31, during the presidency of Joao Goulart, the armed forces rebel against the government. After the coup d\u2019\u00e9tat, General Humberto Castelo Branco is designated as head of government, and Goulart goes into exile in Uruguay. The military dictatorship deployed a series of measures aiming to thwart political opposition to the regime, which turned into a violent repressive campaign. This repression was also coordinated with other governments of the broader South American region through the Operation Condor.",
            "1968": "Passeata dos Cem Mil. A mass protest against the dictatorship took place in Rio de Janeiro, with the participation of different sectors of Brazilian civil society.",
            "1972": "The organization Amnesty International publishes a report containing the names of victims of torture in Brazil. It also identifies some of the state officials responsible.",
            "1974": "On February 23, student Fernando de Santa Cruz was detained by agents of the state in Rio de Janeiro, then killed and forcibly disappeared.",
            "1975": "On October 26, journalist Vladimir Herzog was tortured and killed after visiting a police station. His murder provoked shock and reactions throughout Brazilian society.",
            "1976": "Between January 16 and 17, the metalworker Manoel Fiel Filho is tortured and killed by agents of the dictatorship.",
            "1977": "In a courtyard of the Universidad de S\u00e3o Paulo, the lawyer Goffredo Telles Jr. read out the 'Carta aos brasileiros,' a text condemning the dictatorship.",
            "1979": "Lei da Anistia. The dictatorship government decreed an amnesty law. It was a long-standing demand of Brazilian civil society, intended to benefit citizens that were politically persecuted, though it was approved in the terms defined by the government.",
            "1985": "The book Brasil: nunca mais was published. It is a report that documents, from judicial sources, cases of human rights violations during the dictatorship. Tancredo Neves became president through an electoral college, defeating the candidate of the dictatorship\u2019s government. Neves died the same year and Jos\u00e9 Sarney became president."
        },
        "memory_initiatives": [
            "Lei N\u00b09.140 'Lei dos Desaparecidos' (1995): a legal instrument that establishes the state\u2019s responsibility in the death of people forcibly disappeared because of their political activities between 1961 and 1988. Also creates the Comiss\u00e3o Especial sobre Mortos e Desaparecidos Pol\u00edticos.",
            "Lei N\u00b010.559 (2002): a legal instrument that creates the Comiss\u00e3o de Anistia and establishes reparation measures for people that were granted political amnesty.",
            "Direito \u00e0 Mem\u00f3ria e \u00e0 Verdade (2007): a report produced as a result of the work of the CEMPD, published by the Secretaria Especial dos Dereitos Humanos.",
            "D\u00f4ssie Ditadura: Mortos e Desaparecidos Pol\u00edticos no Brazil (1964-1985) (2009): the latest report of the investigations on victims of human rights violations carried out by the Comiss\u00e3o de Familiares de Mortos e Desaparecidos Pol\u00edticos. Different versions of the document have been published since 1979.",
            "Relat\u00f3rio da Comiss\u00e3o Nacional da Verdade (2014): a document, published in three volumes, detailing the work of this commission. http://cnv.memoriasreveladas.gov.br"
        ],
        "sites_of_memory": [
            "Memorial Pessoas Imprescind\u00edveis: a series of commemorative sites, located in different cities, dedicated to victims of human rights violations during the dictatorship.",
            "Memorial da Anistia: an unfinished project for a commemorative space that was going to be constructed in the city of Belo Horizonte.",
            "Caminhos da ditadura em Porto Alegre (2016): a map, available online, of sites of state repression and civil resistance to the dictatorship in this city, created by historian Anita Natividade Carneiro. https://www.ufrgs.br/caminhosdaditaduraemportoalegre/"
        ],
        "organizations": [
            "Comiss\u00e3o de Justi\u00e7a e Paz (CJE): an organization created in 1972 with the aid of Catholic Archbishop Paulo Evaristo Arns, which provided support to victims of human rights violations.",
            "Movimento Feminino Pela Anistia (MFPA): a political movement founded in 1975 by Theresinha Zerbini. It installed a demand for amnesty for citizens politically persecuted by the dictatorship.",
            "Comiss\u00e3o Especial sobre Mortos e Desaparecidos Pol\u00edticos (CEMPD): an investigative body created in 1995 with the aim of searching for people killed and forcibly disappeared during the dictatorship period, as well as resolving on reparatory demands for the victims\u2019 families. The commission was recently closed in December 2022, without completing its task.",
            "Comiss\u00e3o Nacional da Verdade (CNV): an official body created in 2011 with the purpose of investigating human rights violations that occurred between September 18, 1946, and October 5, 1985."
        ],
        "issues_specific_to_the_country": [
            "You can include any specific issues for Brazil here."
        ]
    },
    {
        "country": "Chile",
        "period": "Pinochet dictatorship (1973-1990)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "reparation law",
            "truth commission",
            "state museum",
            "memorial sites"
        ],
        "actors": [
            "Chilean state",
            "Chilean Armed Forces",
            "Guerrilla groups",
            "a wide spectrum of Chilean political parties",
            "various civil organizations"
        ],
        "key_historical_events": {
            "1973": "On 11 September, the armed forces stage a coup and depose Salvador Allende. A 'Junta Militar' led by General Augusto Pinochet took control of the government. The dictatorship began a violent political persecution of the population. As part of the 'Caravana de la muerte', the army deployed its forces throughout the country, killing and forcibly disappearing those perceived as political opponents.",
            "1976": "Catholic Archbishop Ra\u00fal Silva Henr\u00edquez founded the Vicar\u00eda de la solidaridad. The organization would provide a wide range of assistance to victims of human rights violations until 1992.",
            "1978": "Hornos de Lonqu\u00e9n case. The remains of 15 campesinos imprisoned during the early years of the dictatorship are found in the lime kilns of an abandoned mine. This site was one of the first to be transformed into a place of remembrance after the dictatorship.",
            "1983": "A mass protest against the dictatorship is held in Santiago in May. Mass protests continue in the following years.",
            "1985": "The discovery of the decapitated bodies of three members of the Communist Party (Jos\u00e9 Manuel Parada, Manuel Guerrero, and Santiago Nattino) causes a nationwide shock.",
            "1989": "In the context of mass mobilizations against the dictatorship, a referendum is held on the continuation of the Pinochet government. The 'Campa\u00f1a por el No' (a campaign against the continuity of the dictatorship government) wins, paving the way for elections.",
            "1990": "In May, Patricio Aylwin becomes the first elected president since the dictatorship."
        },
        "memory_initiatives": [
            "Informe de la Comisi\u00f3n de Verdad y Reconciliaci\u00f3n (1991): also known as Informe Rettig, it is a document published in three volumes detailing the result of the work of the commission. http://bibliotecadigital.indh.cl/handle/123456789/170",
            "Programa de Reparaci\u00f3n y Atenci\u00f3n Integral en Salud y Derechos Humanos (PRAIS) (1992): a program of reparative measures and health assistance for victims and their relatives, operated through the Ministry of Health.",
            "Ley 19.123 (1992, with subsequent modifications): the law that creates the Corporaci\u00f3n Nacional de Reparaci\u00f3n y Reconciliaci\u00f3n. It defines investigative and reparative measures for cases of victims of human rights violations, as per the recommendations found in the 'Informe Rettig'. Some measures were continued through the Programa de Derechos Humanos (1997).",
            "Ley 20.405 (2009): Creates the Instituto Nacional de Derechos Humanos, which takes up some of the roles defined in the instruments mentioned above.",
            "Informe de la Comis\u00f3n Nacional sobre Prisi\u00f3n Pol\u00edtica y tortura (2005): a report of the investigation carried out by this commission. It is also known as Informe Valech I, as it was later expanded by the work (Informe Valech II) of the Comisi\u00f3n asesora para la calificaci\u00f3n (see 'Organizations' below). http://bibliotecadigital.indh.cl/handle/123456789/455 http://bibliotecadigital.indh.cl/handle/123456789/600"
        ],
        "sites_of_memory": [
            "Parque por la Paz Villa Grimaldi: a property that became one of the main centers of detention and torture during the dictatorship. Repurposed as a commemorative space, it has been open to the public as a park since 1997.",
            "Pisagua memorial and historical monuments: an ensemble of buildings in a small port city in the north of the country that were used as a concentration camp during the dictatorship. Mass graves of executed prisoners were found on the site.",
            "Museo de la memoria y los derechos humanos: an institution inaugurated in 2010, with educational and commemorative purposes pertaining to the dictatorship period and human rights issues. Hosts an archive and documentation center."
        ],
        "organizations": [
            "Agrupaci\u00f3n de Familiares de Detenidos Desaparecidos (AFDD), Agrupaci\u00f3n de Familiares de Ejecutados Pol\u00edticos (AFEP): two organizations created, respectively, in 1975 and 1976, by relatives of victims of human rights violations by state agents during the dictatorship.",
            "Comisi\u00f3n Chilena de Derechos Humanos: a non-governmental organization created in 1978 to safeguard human rights in the country. It keeps an archive including different types of documents.",
            "Comisi\u00f3n Nacional de Verdad y Reconciliaci\u00f3n (Comisi\u00f3n Rettig): an investigative body created in 1990 to examine cases of human rights violations on the hands of state agents or as a result of politically motivated violence during the dictatorship.",
            "Comisi\u00f3n Nacional de Prisi\u00f3n Pol\u00edtica y Tortura (Comisi\u00f3n Valech): an investigative body created in 2003, the purpose of which was to expand the inquiry into cases of human rights violations.",
            "Comisi\u00f3n asesora para la calificaci\u00f3n de detenidos desaparecidos, ejecutados pol\u00edticos y v\u00edctimas de prisi\u00f3n pol\u00edtica y tortura entre el 11 de septiembre de 1973 y el 10 de marzo de 1990: an investigative body established in 2010 to identify additional cases of human rights violations during the dictatorship."
        ],
        "issues_specific_to_the_country": [
            "Another commission active during the post-dictatorship period was the Comisi\u00f3n de verdad y nuevo trato. Active between 2001 and 2033, its aim was to examine the historical relationship between the Chilean state and indigenous peoples, as well as to provide recommendations on ongoing issues that affect the latter, such as land access and their socio-economic situation."
        ]
    },
    {
        "country": "Colombia",
        "period": "Internal Armed Conflict (1960s-)",
        "categories": [
            "Internal armed conflict",
            "indigenous peoples",
            "truth commission",
            "reparations law",
            "memorial sites"
        ],
        "actors": [
            "Colombian state",
            "Colombian Armed Forces",
            "Guerrilla groups",
            "paramilitary groups",
            "drug dealers\u2019 organizations",
            "Colombian political parties",
            "campesinos",
            "indigenous peoples",
            "various civil organizations"
        ],
        "key_historical_events": {
            "1958": "The conservative and liberal parties of Colombia establish the Frente Nacional. This agreement involved alternance in power, but solely between these two parties. It lasted until 1974.",
            "1964": "The guerrilla organizations Ej\u00e9rcito de Liberaci\u00f3n Nacional (ELN) and the Fuerzas Armadas Revolucionarias de Colombia (FARC) were formed.",
            "1965": "The government issued Decree 3398 (turned Law 48 in 1968) that allowed the formation of armed forces among the civilian population. It will be declared unconstitutional in 1989.",
            "1967": "The guerrilla organization Ej\u00e9rcito Popular de Liberaci\u00f3n (EPL) was founded.",
            "1974": "The guerrilla organization Movimiento 19 de Abril (M-19) was formed.",
            "1977": "Paro c\u00edvico nacional. On 14 September, a national strike against the government broke out. Following several years of demonstrations, this one was the largest that the country had ever seen.",
            "1978": "The government issued Decreto 1923, establishing the Estatuto de Seguridad. It increased the punitive attributions of state organisms, which led to human rights violations.",
            "1979": "On 30 March, the first Foro Nacional de Derechos Humanos takes place. As a result, the Comit\u00e9 Permanente por la Defensa de los Derechos Humanos (CPDH) was created.",
            "1984": "Indigenous peoples from the Cauca department establish the guerrilla organization Movimiento Armado Quint\u00edn Lame (MAQL).",
            "1986": "Masacre de Trujillo. This year marks the beginning of a series of killings perpetrated by the armed forces and drug dealer groups against the population of the Cauca Valley, up until 1994.",
            "1989": "As part of a war against the state, drug dealer groups led by Pablo Escobar, carried out a series of murders. Presidential candidate Luis Carlos Gal\u00e1n was one of the victims. Mass protests erupted in Colombia in response to this violence.",
            "1990": "During Virgilio Barco\u2019s term, a peace agreement was signed between the government and the M-19 guerrilla. The next year, part of the EPL was also demobilized.",
            "1991": "On 4 July, during C\u00e9sar Gaviria's presidency, a new Constitution was proclaimed.",
            "1993": "Government forces collaborating with drug dealers, organized as the group known as \u201cLos Pepes\u201d, kill Pablo Escobar.",
            "1997": "Mandato Ciudadano por la Paz, la Vida y la Libertad. While the violence of the armed conflict was rising, an initiative led by Colombian citizens demanded a non-violent resolution to the conflict.",
            "1999": "\u201cPlan Colombia\u201d. An agreement between the governments of Colombia and the US to combat drug trafficking leads to increased financial support and military presence by the latter.",
            "2003": "Following negotiations with the government, the AUC started a demobilization process, although violent actions by paramilitary groups continued.",
            "2008": "Case \u201cFalsos Positivos\u201d. A public scandal broke out after the revelation that, from around 2002 onwards, thousands of civilians were killed by the army and presented as enemy combatants.",
            "2012": "Peace talks between the government and the FARC began in the city of La Habana, Cuba.",
            "2016": "Acuerdo Final para la Terminaci\u00f3n del Conflicto y la Construcci\u00f3n de una Paz Estable y Duradera. On 26 September, the Colombian government and the FARC signed a peace agreement. Following a referendum, a revised agreement was signed on 24 November."
        },
        "memory_initiatives": [
            "Ley 975, \u201cde Justicia y Paz\u201d (2005): a legal framework aimed to facilitate the demobilization and reincorporation to civilian life of members of illegal armed groups.",
            "Ley 1.448, also known as \u201cLey de V\u00edctimas y Restituci\u00f3n de Tierras\u201d (2011): a law that establishes a series of judicial, administrative, and reparation measures for victims of human rights violations during the armed conflict. It is linked to specific decrees (N\u00b04633, 4634, 4635) that pertain to ethnic groups.",
            "This law also created the Sistema Nacional de Atenci\u00f3n y Reparaci\u00f3n Integral a las V\u00edctimas (SNARIV), a network that coordinates reparation and support measures for victims of the armed conflict throughout the country. Additionally, the Programa de Atenci\u00f3n Psicosocial y Salud Integral a V\u00edctimas (PAPSIVI) provides healthcare and community support.",
            "Sistema Integral de Verdad, Justicia, Reparaci\u00f3n y No Repetici\u00f3n (SIVJRNR) (2017): a series of mechanisms for reparation, investigation, and justice that stem from the Acuerdo de Paz.",
            "In addition to the work of the Truth Commission, the SIVJRNR includes the Jurisdicci\u00f3n Especial para la Paz (JEP), which investigates cases of human rights violations, and the Unidad de B\u00fasqueda de Personas dadas por Desaparecidas (UBPD), which deals with cases of disappeared persons.",
            "Informe \u201cHay Futuro si hay Verdad\u201d (2022): the final report with the results of the work of the CEV, published in 11 volumes (comprising 24 parts). https://www.comisiondelaverdad.co/hay-futuro-si-hay-verdad"
        ],
        "sites_of_memory": [
            "Centro de Memoria Hist\u00f3rica: a government institution created in 2011 (under Law 1.448), with the task of preserving the memory of the armed conflict. It hosts the Archivo de los Derechos Humanos and a Museo de la Memoria Hist\u00f3rica, the latter still unfinished.",
            "Centro de Memoria, Paz y Reconciliaci\u00f3n: a memorial site that was inaugurated in 2012 in Bogot\u00e1. It is located in the Parque de la Reconciliaci\u00f3n and regularly hosts public activities. It houses a documentation center.",
            "Museo Casa de la Memoria: a commemorative institution that was inaugurated in 2012 in the city of Medell\u00edn, the result of the work of victims of the armed conflict and the mayor\u2019s office."
        ],
        "organizations": [
            "Asociaci\u00f3n de Familiares de Detenidos y Desaparecidos (ASFADDES): a non-governmental organization established in 1983 by relatives of victims of enforced disappearances.",
            "Movimiento de V\u00edctimas de Cr\u00edmenes de Estado (MOVICE): an umbrella organization for victims of human right violations perpetrated by state forces or paramilitary groups.",
            "Comisi\u00f3n Nacional de Reparaci\u00f3n and Restauraci\u00f3n (CNRR): a body established by the Ley 975. It comprises the Grupo de Memoria Hist\u00f3rica (GMH), an investigative unit that has published reports on the armed conflict.",
            "Comisi\u00f3n para el Esclarecimiento de la Verdad, la Convivencia, and la No Repetici\u00f3n (CEV): a body created after the 2016 agreement, to investigate the armed conflict and provide a path to reconciliation.",
            "Consejer\u00eda Presidencial para los Derechos Humanos and el Derecho Internacional Humanitario: the state body currently in charge of coordinating state actions in line with the promotion of human rights."
        ],
        "issues_specific_to_the_country": [
            "No issue mentioned"
        ]
    },
    {
        "country": "Ecuador",
        "period": "State violence, human rights violations and political instability (1983 - 2008)",
        "categories": [
            "Coup",
            "reparation law",
            "indigenous peoples",
            "truth commission"
        ],
        "actors": [
            "Ecuadorian State",
            "Police and Armed Forces from Ecuador",
            "various political parties from Ecuador",
            "indigenous peoples and their organizations",
            "other civil organizations"
        ],
        "key_historical_events": {
            "1984": "In August, after winning the election, Rafael Febres-Cordero became president. According to the report of the CVE, 68% of the cases investigated occurred during his authoritarian rule.",
            "1985": "Teacher Consuelo Benavides Ceballos was detained, tortured, and killed by members of the navy in the Esmeraldas province.",
            "1986": "Representatives of various indigenous peoples from Ecuador found the Confederaci\u00f3n de Nacionalidades Ind\u00edgenas del Ecuador (CONAIE).",
            "1988": "The Restrepo Arismendi brothers, minors Carlos and Santiago, were detained and tortured by police forces. Their bodies were forcibly disappeared and have not yet been found.",
            "1990": "During the presidency of Eduardo Ball\u00e1n, the CONAIE led the first of the mass mobilization episodes known as \u201clevantamientos ind\u00edgenas\u201d. Their demands pertained to land access and legislation, as well as recognition of plurinationality.",
            "1993": "Episode known as \u201c11 del Putumayo\u201d. Following a deployment of the army in the Sucumb\u00edos province, 11 campesinos were detained and tortured. They were kept imprisoned for 3 years.",
            "1996": "Abdala Bucaram was elected president. Amidst mass public protests against the government, Bucaram was ousted in 1997 by the Congress.",
            "1998": "Jamil Mahuad was elected president. In 2000, amid mass indigenous protests, the army staged a coup and installed Gustavo Noboa as head of government.",
            "2002": "Lucio Guti\u00e9rrez was elected president. In 2005, following the civil protests known as \u201cRebeli\u00f3n de los forajidos\u201d, Guti\u00e9rrez was ousted by the Congress."
        },
        "memory_initiatives": [
            "Informe: sin verdad no hay justicia (2010): a document comprising five volumes that detail the work of the Comisi\u00f3n de la Verdad regarding the 1983-2008 period.",
            "Ley para la Reparaci\u00f3n de las V\u00edctimas y la Judicializaci\u00f3n de graves violaciones de Derechos Humanos y Delitos de Lesa Humanidad ocurridos en el Ecuador entre el 4 de octubre de 1983 y el 31 de diciembre de 2008 (2013): a legal instrument that defines reparation measures for victims of human rights violations recognized by the work of the CVE.",
            "Within the framework established by this law, in 2014 the Defensor\u00eda del Pueblo creates the Direcci\u00f3n Nacional de Reparaci\u00f3n a Victimas y Combate a la Impunidad."
        ],
        "sites_of_memory": [
            "Museo de la memoria: a commemorative space that is expected to be constructed by the Ecuadorian state, following what is established in the Ley para la Reparaci\u00f3n. Besides some preliminary studies, the space has not yet materialized."
        ],
        "organizations": [
            "Fundaci\u00f3n Regional de Asesor\u00eda en Derechos Humanos (INREDH): an organization formed in 1993, known for their work on the Putumayo case. Provides legal support related to human rights issues.",
            "Comit\u00e9 de v\u00edctimas y familiares de delitos de lesa humanidad y graves violaciones de derechos humanos: an organization currently led by Clara Merino, who has been active since the 1980s in the promotion of human rights in Ecuador.",
            "Comisi\u00f3n Ecum\u00e9nica de Derechos Humanos (CEDHU): a non-governmental organization that collaborates with various groups around human rights issues. It was formed in 1978, after a massacre of workers at the hands of police forces.",
            "Comisi\u00f3n de la Verdad del Ecuador: an investigative body created by presidential decree in 2007, during the government of Rafael Correa, with the aim of researching human rights violations occurred between 1983 and 2008."
        ],
        "issues_specific_to_the_country": [
            "No issue mentioned"
        ]
    },
    {
        "country": "El Salvador",
        "period": "Civil war (1980-1992)",
        "categories": [
            "Internal armed conflict",
            "coup",
            "truth commission",
            "indigenous peoples"
        ],
        "actors": [
            "Salvadorian state",
            "Salvadorian Armed Forces and security corps",
            "paramilitary groups",
            "Guerrilla groups (mainly the FMLN)",
            "campesinos",
            "indigenous peoples",
            "Salvadorian political parties",
            "various civil organizations"
        ],
        "key_historical_events": {
            "1979": "On 15 October, a coup led by the army ousted General Carlos Romero from the presidency. A Junta Revolucionaria de Gobierno (JRG) took control of the government.",
            "1980": "In November, several groups opposed to the government founded the guerrilla organization Frente Farabundo Mart\u00ed para la Liberaci\u00f3n Nacional (FMLN).",
            "1981": "Masacre de El Mozote. As part of a series of violent counterinsurgency operatives, in December the army burned a series of rural towns, torturing and murdering the local population.",
            "1983": "Marianella Garc\u00eda, a lawyer known for her work on human right issues, was killed by the army.",
            "1984": "Jos\u00e9 Napole\u00f3n Duarte won the elections and became president.",
            "1985": "Following a series of kidnappings of mayors during the year, the FMLN kidnapped In\u00e9s Duarte, the president's daughter. She was released following negotiations on the release of political prisoners.",
            "1986": "The high number of displaced people as a result of the war led to the creation of the Coordinadora Nacional de Repoblaci\u00f3n (CNR) to help repopulate some areas.",
            "1987": "Guatemala was one of the Centro American countries that subscribed to the Esquipulas II agreement, to work towards reconciliation commissions and amnesty laws.",
            "1988": "Herbert Anaya, head of the organization Comisi\u00f3n de Derechos Humanos de El Salvador, was assassinated near his home, prompting widespread commotion.",
            "1989": "On 16 November, six Jesuit priests and two women were killed by army troops in the Universidad Centroamericana. The killings were widely condemned, both locally and abroad.",
            "1991": "The United Nations established an Observer Mission to oversee the partial agreements between the Salvadorian government and the FMLN.",
            "1992": "Acuerdos de Chapultepec. On 16 January, after many years of negotiations, the Salvadoran government and the FMLN signed a peace agreement in the city of Chapultepec in Mexico. A series of state reforms were enacted as part of the agreement.",
            "1993": "An amnesty law was issued, the Ley de Amnist\u00eda General para la Consolidaci\u00f3n de la Paz. This instrument was subsequently questioned and abolished in 2016."
        },
        "memory_initiatives": [
            "Informe \u201cDe la Locura a la Esperanza: La guerra de 12 a\u00f1os en El Salvador\u201d (1993): the final report documenting the work of the Comisi\u00f3n de la Verdad",
            "Caso Masacres de El Mozote y lugares aleda\u00f1os vs. El Salvador: In 2012, the IACHR declared that the Salvadorian state was responsible for human rights violations, and thus it must investigate them and make reparations. The Salvadorian state has delayed its response to this resolution."
        ],
        "sites_of_memory": [
            "Monumento a la Memoria y a la Verdad: a granite memorial inaugurated in 2003, located in the Cuscatl\u00e1n Park in San Salvador. It contains the names of victims of the civil war.",
            "Memorial de Sisiguayo: a commemorative monument for victims of a massacre during the war, inaugurated in 2018 in the Usulut\u00e1n department."
        ],
        "organizations": [
            "Comit\u00e9s de Madres Hist\u00f3ricos de Personas Asesinadas, Torturadas y Desaparecidas de El Salvador (COMADDRES y CODEFAM): two organizations of relatives of victims of human rights violations that have been active since the late 1970s.",
            "Tutela legal del Arzobispado: an organization dedicated to the advancement of human rights that was active from 1982 to 1993, continuing the work of a previous organization (Socorro Cristiano). Some of the staff continued their work in another institution, the Asociaci\u00f3n de Derechos Humanos, Tutela Legal 'Dra. Maria Julia Hernandez'.",
            "Comisi\u00f3n de Derechos Humanos de El Salvador (CDHES): a non-governmental organization that has been working since 1982 in the promotion of human rights.",
            "Comisi\u00f3n de la Verdad: the investigative body that was created after the peace agreement to investigate the causes and consequences of the violence that took place from 1980 onwards.",
            "Procurador\u00eda para la Defensa de los Derechos Humanos: a state institution created after the peace agreement to promote and protect human rights in the country."
        ],
        "issues_specific_to_the_country": [
            "Different organizations have petitioned the Salvadoran government to issue a law concerning transitional justice, reparation, and reconciliation, unsuccessfully.",
            "The current government has been recently under scrutiny for human right violations occurred during an ongoing state of exception in the country."
        ]
    },
    {
        "country": "Panama",
        "period": "Military dictatorships (1968-1989)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "international armed conflict",
            "truth commission"
        ],
        "actors": [
            "Guardia Nacional, the armed forces of Panama (also known as Fuerzas de Defensa)",
            "various Panamanian political parties",
            "Panamanian civil organizations",
            "Government of the United States of America"
        ],
        "key_historical_events": {
            "1968": "On October 11, forces of the Guardia Nacional effected a coup d\u2019\u00e9tat, deposing elected president Arnulfo Arias. The main legislative body, the Asamblea Nacional, was closed. Civil and political rights were restricted, and many citizens were violently persecuted.",
            "1969": "General Omar Torrijos took control of the government.",
            "1970": "Union leader Heliodoro Portugal was detained by the armed forces, killed, and his body forcibly disappeared.",
            "1971": "Colombian priest Jes\u00fas H\u00e9ctor Gallego was kidnapped in the Veraguas province by members of the Guardia Nacional. He was then killed and forcibly disappeared.",
            "1977": "A delegation from the Inter-American Commission on Human Rights visited Panama. A report on the human rights situation was produced in 1978.",
            "1981": "General Torrijos died in an accident.",
            "1983": "Manuel Antonio Noriega took control of the armed forces and de facto control of the government. The Guardia Nacional became the Fuerzas de Defensa, increasing its size and budget.",
            "1985": "Physician and guerrilla Hugo Spadafora was tortured, killed, and beheaded by agents of the Fuerzas de Defensa. Spadafora had openly criticized Noriega who, in response, arranged the former\u2019s killing. Protests sparked across the country.",
            "1987": "Mass protests against the Noriega regime occurred in Panama. The organization known as Cruzada Civilista led the calls to protest, which were violently repressed by the government.",
            "1989": "While Panama was still under U.S. occupation, Guillermo Endara became president, based on the results of the last held election."
        },
        "memory_initiatives": [
            "Informe de la Comisi\u00f3n de la Verdad de Panam\u00e1. \u201c\u2026la Verdad os har\u00e1 libres\u201d (2002): document detailing the work of the commission, published by the Defensor\u00eda del Pueblo.",
            "Case Heliodoro Portugal versus Panama (2008). After a long judicial process, a sentence of the Inter American Court of Human Rights determines the Panamanian state\u2019s responsibility in this case of enforced disappearance.",
            "Friendly settlements in Case 13,017 Families of Victims of Panama\u2019s Military Dictatorship (2019). With IACHR mediation, the Panamanian state and two organizations of victims of the dictatorship reach an agreement comprising, among other measures: recognition of state responsibility, memory initiatives, and reparative measures."
        ],
        "sites_of_memory": [
            "Cuartel Los Pumas: barracks located in the Tocumen neighborhood, Panama City. In 1999 the first human remains of victims of state violence were found at this location. As the remains were buried in mass graves, long judicial processes have been required to identify them."
        ],
        "organizations": [
            "Comit\u00e9 Paname\u00f1o por los Derechos Humanos (CPDH): an organization active since 1987, working on different human rights issues.",
            "Coordinadora Popular de Derechos Humanos de Panam\u00e1 (COPODEHUPA): a civil organization founded in 1986 with the aim of providing support in cases of human rights violations.",
            "Comit\u00e9 de Familiares de Asesinados y Desaparecidos de Panam\u00e1 \u201cH\u00e9ctor Gallego\u201d (COFADEPA), Comit\u00e9 de Familiares de Asesinados y Desaparecidos de Chiriqu\u00ed (COFADECHI): civil organizations of relatives of victims of human rights violations during the dictatorship period.",
            "Comisi\u00f3n de la Verdad: A body created in 2001 at the behest of various civil organizations, with the aim of investigating cases of victims of state violence that occurred from 1968 to 1989.",
            "Comisi\u00f3n 20 de Diciembre 1989: A commission created via an Executive Order in 2016 with the aim of investigating human rights violations that occurred during the U.S. invasion of Panama."
        ],
        "issues_specific_to_the_country": [
            "The United States government was heavily involved in Panamanian politics, partly due to their former control of the Panama Canal, which was later returned to Panama through the Torrijos-Carter treaty.",
            "Moreover, the School of the Americas, the institution through which the U.S. government provided training in violent methods of counterinsurgency to Latin American armed forces, operated for many years in the Panama Canal zone."
        ]
    },
    {
        "country": "Paraguay",
        "period": "Stroessner dictatorship (1954-1989)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "indigenous peoples",
            "reparations law",
            "truth commission",
            "state museum",
            "memorial sites"
        ],
        "actors": [
            "Paraguayan armed forces",
            "Uruguayan political parties (mainly the Partido Colorado, the sole party of the regime)",
            "Paraguayan civil organizations"
        ],
        "key_historical_events": {
            "1954": "In May, Alfredo Stroessner, commander-in-chief of the armed forces, led a coup that overthrew Federico Ch\u00e1vez. A few months later, Stroessner assumed the presidency after running as the only candidate in the elections.",
            "1959": "The death of Bernardo Aranda triggers a persecution of homosexuals in the country, known as Case 108.",
            "1973": "The genocide of the Ach\u00e9 people is denounced internationally by Mark Munzel. Since the 1960s, Paraguayan and foreign intellectuals had been denouncing the violence perpetrated against various indigenous peoples. The latter had been victims of illegal land appropriation, sexual violence, enslavement, and human trafficking, among other crimes.",
            "1976": "Event known as the 'Pascua dolorosa.' The regime launched a bloody campaign of repression against peasant movements, mainly the Ligas Agrarias Cristiana in the Misiones province.",
            "1988": "Marcha por la vida. A massive protest demonstration in Asunci\u00f3n on Human Rights Day was repressed by government forces.",
            "1989": "A coup led by General Andr\u00e9s Rodr\u00edguez ends the Stroessner regime as a result of internal strife. The Partido Colorado remained in power.",
            "1992": "Documents from the so-called 'Archive of Terror' are discovered.",
            "2006": "The ruling of the Inter-American Court of Human Rights in the case 'Goibur\u00fa and others vs. Paraguay' set a precedent by recognizing the existence of Operation Condor."
        },
        "memory_initiatives": [
            "Informe Final de la Comisi\u00f3n de Verdad y Justicia - Anive hagu\u00e2 oiko (2008): a document published as a result of the work of this Commission. It establishes the responsibility of the State and related bodies in the perpetration of crimes against humanity.",
            "Ley N\u00ba 3603 (2008, y su precedente la Ley N\u00b0 838/96): a law establishing compensation for victims (and their families) whose human rights were violated by state action between 1954 and 1989."
        ],
        "sites_of_memory": [
            "Museo de las memorias: Dictadura y derechos humanos: a museum in Asunci\u00f3n, opened in 2002 in one of the main detention and torture centers of the dictatorship, the Direcci\u00f3n Nacional de Asuntos T\u00e9cnicos.",
            "Museo de la Justicia, Centro de Documentaci\u00f3n y Archivo para la Defensa de los Derechos Humanos: institution that houses the approximately 700,000 documents that form part of the so-called 'Archive of Terror,' evidence of repressive activities in Paraguay and Latin America, including key data on the Operation Condor.",
            "Plaza de los desaparecidos: a public memorial, where the artist Carlos Colombino has re-adapted an effigy of Stroessner, trapping it between blocks.",
            "Abraham Cue: a place of remembrance in the Misiones department, which served as a barracks, concentration camp, and torture camp, linked to the events of the 'Pascua dolorosa.'"
        ],
        "organizations": [
            "Comit\u00e9 de Iglesias para Ayudas de Emergencia (CIPAE): an organization linked to the Catholic Church, active since 1976. Has published research on human rights abuses during the dictatorship.",
            "Coordinadora de derechos humanos en Paraguay (CODEHUPY): A group of civil society organizations, founded in 1999, dedicated to the defense of human rights.",
            "Mesa memoria hist\u00f3rica y archivos de la represi\u00f3n: A body that brings together various organizations of victims of the dictatorship and their families.",
            "Comisi\u00f3n Verdad y Justicia (CVR): Official body created in 2004 to investigate cases of human rights violations that occurred between 1954 and 2003. It became the Direcci\u00f3n General de Verdad, Justicia y Reparaciones (DGVJYR) in 2009."
        ],
        "issues_specific_to_the_country": [
            "The report of the CVR describes the phenomenon known as 'tierras mal habidas.' During the years of the dictatorship, massive irregular transfers of land ownership took place, resulting in unequal distribution to the detriment of peasant and indigenous communities."
        ]
    },
    {
        "country": "Peru",
        "period": "Internal armed conflict (1980-2000)",
        "categories": [
            "Internal armed conflict",
            "indigenous peoples",
            "truth commission",
            "reparations law",
            "state museum",
            "memorial sites"
        ],
        "actors": [
            "Peruvian state",
            "terrorist guerrilla groups (Partido Comunista del Per\u00fa-Sendero Luminoso, Movimiento Revolucionario T\u00fapac Amaru) Peruvian armed forces",
            "Alberto Fujimori",
            "civil organisations"
        ],
        "key_historical_events": {
            "1980": "An attack by Sendero Luminoso guerrillas on the electoral headquarters in Chuschi, Ayacucho region, marked the beginning of the internal armed conflict. The attack took place on the eve of the first presidential elections after twelve years of military dictatorship.",
            "1983": "Police forces tortured and killed 32 people in the community of Socos, Ayacucho.",
            "1984": "The Movimiento Revolucionario T\u00fapac Amaru (MRTA) guerrilla began its armed activities.",
            "1985": "Masacre de Accomarca. Army troops assassinated 69 peasants in the district of Accomarca in Ayacucho.",
            "1989": "Sendero Luminoso forces attacked the police station in Uchiza, Ayacucho, and looted the town.",
            "1992": "Abimael Guzm\u00e1n, leader of Sendero Luminoso, was captured in September.",
            "1996": "Members of the MRTA stormed the Japanese embassy in Lima. They held dozens of hostages for four months.",
            "1998": "Matanza del valle de Tsiriari. An armed group attacked several communities in the Tsiriari Valley in the Jun\u00ednn region and massacred the local population.",
            "2000": "During a political crisis, Fujimori resigns as president and is impeached by Congress."
        },
        "memory_initiatives": [
            "Informe final de la Comisi\u00f3n de Verdad y Reconciliaci\u00f3n (2003): a nine-volume document published as a result of this commission's work. It establishes responsibilities for human rights violations by both subversive groups and the state and its armed forces.",
            "Ley N\u00b028.592 Crea el Plan Integral de Reparaciones (2005, with further modifications): a law that establishes the conditions and procedures for granting reparations to victims of human rights violations committed between 1980 and 2000.",
            "Caso Abimael Guzm\u00e1n y otros (2006): civilian trial in which Abimael Guzm\u00e1n was sentenced to life imprisonment for aggravated terrorism and murder.",
            "Juicio a Alberto Fujimori (2009): Trial in which the former dictator was sentenced to 25 years in prison for crimes against humanity following his extradition."
        ],
        "sites_of_memory": [
            "Yuyanapaq: para recordar: a photographic exhibition documenting the period of the internal armed conflict. Inaugurated in 2003, it is currently housed in the headquarters of the Ministry of Culture.",
            "Museo de la memoria \u201cPara que no se repita\u201d: a memorial space inaugurated in Ayacucho in 2006, as a result of the work of ANFASEP.",
            "El ojo que llora: memorial created by Lika Mutal, inaugurated in 2005 in the Campo de Marte in Lima. It contains the names of victims of violence during the conflict.",
            "Lugar de la Memoria, la Tolerancia y la Inclusi\u00f3n Social (LUM): A memorial and educational space, inaugurated in 2015, dedicated to the period of violence between 1980 and 2000. It has a documentation centre."
        ],
        "organizations": [
            "Asociaci\u00f3n Nacional de Familiares de Secuestrados, Detenidos y Desaparecidos del Per\u00fa (ANFASEP): an organisation of relatives of victims of violence, founded in Ayacucho in 1983 by a group of Quechua-speaking women.",
            "Coordinadora nacional de derechos humanos (CNDDHH): a body created in 1985 that brings together a group of civil society organisations working to defend and promote human rights.",
            "Comisi\u00f3n de Verdad y Reconciliaci\u00f3n: an official body created in 2001 during the administration of Valent\u00edn Paniagua to investigate the violence that took place between May 1980 and November 2000. The commission's archives are currently housed in the Centro de informaci\u00f3n para la memoria y los derechos humanos."
        ],
        "issues_specific_to_the_country": [
            "The conflict spread throughout the entire Peruvian territory, but the effects of the violence were concentrated in the Andean regions, particularly in Ayacucho. According to the CVR, around 75% of the population had indigenous languages as their mother tongue."
        ]
    },
    {
        "country": "Uruguay",
        "period": "Military dictatorship (1973-1985)",
        "categories": [
            "Dictatorship",
            "coup",
            "Operation Condor",
            "amnesty law",
            "reparation law",
            "truth commission",
            "state museum",
            "memorial sites"
        ],
        "actors": [
            "Uruguayan armed forces",
            "Uruguayan political parties (several of which were banned during the period)",
            "social organizations",
            "guerrilla movements active during the previous decade"
        ],
        "key_historical_events": {
            "1973": "Coup d\u2019\u00e9tat. On June 27, Juan Mar\u00eda Bordaberry dissolves the parliament and takes control of the government with the armed forces. Political parties and civic organizations were dissolved, and the universities and public administration were interfered with. A period of violent repression by state agents began, including the imprisonment, torture and murder of citizens. La Secretar\u00eda de Derechos humanos estimates that 192 people disappeared during this period. The Museo de la Memoria estimates that around 5,000 people were prosecuted by the military justice system, a further 3,700 were detained without trial, and 380,000 were forced into exile.",
            "1976": "Zelmar Michelini and H\u00e9ctor Guti\u00e9rrez, opposition politicians, and Rosario Barredo and William Whitelaw of the Tupamaros movement, were murdered in Buenos Aires.",
            "1980": "In a referendum, Uruguayans rejected the constitutional reform proposed by the authoritarian regime.",
            "1983": "Acto del obelisco. In a year that saw numerous demonstrations against the dictatorship, this rally was the largest. A proclamation was made in favor of democracy in Uruguay.",
            "1984": "Pacto del Club Naval. Negotiations were held between representatives of various political parties and the Uruguayan armed forces. It was the prelude to the elections held later that year.",
            "1985": "On March 14, the last political prisoners of the dictatorship are released from the C\u00e1rcel Central."
        },
        "memory_initiatives": [
            "Ley 15.737 (1985): a law that allowed the release of political prisoners by declaring an amnesty for political crimes committed by civilians.",
            "Informe final de la Comisi\u00f3n por la paz (2003): a report containing the results of the work of this commission on the cases of forcibly disappeared prisoners.",
            "Investigaci\u00f3n Hist\u00f3rica sobre Detenidos\u2013Desaparecidos (2006): a five-volume document published as a result of an agreement between the Uruguayan Presidency and the Universidad de la Rep\u00fablica, to study in detail the cases of enforced disappearance.",
            "Ley 18.596 (2009): a law that recognizes the responsibility of the Uruguayan State for the violation of fundamental rights between 1968 and 1975, and the right to full reparation for the victims.",
            "Ley 19.641 (2018). Sitios de Memoria Hist\u00f3rica del pasado reciente: a law that aims to create sites of remembrance in places where the actions of the State led to the violation of human rights."
        ],
        "sites_of_memory": [
            "Memorial en Recordaci\u00f3n de los Detenidos y Desaparecidos. a monument inaugurated in 2001, located on the Cerro de Montevideo. It contains engravings of the names of citizens who disappeared during the dictatorship.",
            "Marcas de la memoria: a spatial intervention project that includes the installation of commemorative plaques in a series of sites associated with the resistance of Uruguayan civil society against the dictatorship.",
            "Museo de la memoria (MUME): an institution dedicated to the promotion of human rights through the construction of memory. It houses various records of state violence during the dictatorship and forms of resistance to it.",
            "Marcha del silencio: a walk held every year on March 20, since 2016, in different parts of Uruguay to demand the clarification of crimes committed during the dictatorship."
        ],
        "organizations": [
            "Servicio Paz y Justicia Uruguay (SERPAJ): a non-governmental organization active since 1981, assisting relatives of disappeared prisoners and organizing demonstrations against the dictatorship. Regularly publishes reports on the human rights situation.",
            "Madres y familiares de uruguayos detenidos desaparecidos: organization consolidated in 1983, bringing together relatives of disappeared prisoners.",
            "Instituci\u00f3n de Estudios Sociales y Legales del Uruguay (IELSUR): a non-governmental organization that has been carrying out legal actions in defense of human rights since 1984.",
            "Comisi\u00f3n Investigadora sobre la situaci\u00f3n de Personas Desaparecidas y Hechos que la Motivaron: an official body created in 1985 to investigate allegations of disappearances that occurred between 1973 and 1978. Its findings were published in a report.",
            "Comisi\u00f3n por la Paz: body created in 2000 to investigate the disappearances that took place during the dictatorship. In the work of the Commission, the State takes on the work of remembrance as an official task."
        ],
        "issues_specific_to_the_country": [
            "Nothing to show"
        ]
    },
    {
        "country": "Venezuela",
        "period": "Social crises and Bolivarian Revolution (1989-)",
        "categories": [
            "Coup",
            "armed forces",
            "authoritarian government",
            "economic crisis",
            "migration"
        ],
        "actors": [
            "Venezuelan state",
            "various Venezuelan political parties (including the Partido Socialista Unido de Venezuela, currently the ruling party)",
            "Venezuelan civil organizations"
        ],
        "key_historical_events": {
            "1989": "\u201cEl Caracazo\u201d. During the second government of Carlos Andr\u00e9s P\u00e9rez, during a socio-economic crisis, a series of mass protests and riots broke out in the country. The government repressed the demonstrations, and many people were killed. These protests continued in the following years.",
            "1992": "On 4 February, a group of army officers leads a coup attempt against the government. The coup fails, and Lieutenant Colonel Hugo Ch\u00e1vez claimed responsibility. There was a second coup attempt on 27 November of the same year.",
            "1993": "In May, P\u00e9rez was impeached on charges of corruption. The Congress removed him from the presidency on 31 August.",
            "1994": "In February, Rafael Caldera became president.",
            "1999": "After winning the elections, Hugo Ch\u00e1vez Fr\u00edas became president of Venezuela, bringing the movement known as the Revoluci\u00f3n Bolivariana to the fore. In the same year, a Constituent Assembly was organized, and on 21 December, a new Constitution is proclaimed. The country\u2019s name was changed to Rep\u00fablica Bolivariana de Venezuela.",
            "2001": "Protests against the government began, led by various groups. These continued throughout the following years.",
            "2002": "Coup d\u2019\u00e9tat. In April, amid mass protests in the country, Ch\u00e1vez was ousted from power for a few days by the military. He was reinstated shortly afterwards. A general strike broke out in December and lasted until February 2003. The episode is also known as \u201cparo petrolero\u201d, as it had the state oil company as one of its main actors.",
            "2004": "A referendum was called to decide whether Chav\u00e9z\u2019s should continue as president, and it was resolved in his favor.",
            "2007": "Ch\u00e1vez was re-elected president. The political parties that support the government were merged into the Partido Socialista Unido de Venezuela (PSUV).",
            "2012": "Ch\u00e1vez won the presidential election but passed away on 5 March 2013.",
            "2013": "A presidential election was held after Ch\u00e1vez\u2019s death. Nicol\u00e1s Maduro was elected president. The results of the election were contested by parts of the opposition and protests broke out.",
            "2014": "Numerous protests against the Maduro government and the living conditions of the population took place throughout the year and were repressed by the government.",
            "2017": "In April, a wave of protests broke out across the country following some government measures concerning the legislative body, the Asamblea Nacional. These were violently repressed by the state, but continued until July of that year.",
            "2019": "In January, as Nicol\u00e1s Maduro was about to be inaugurated for another term, his appointment was questioned by various groups. The Asamblea Nacional nominated Juan Guaid\u00f3 as interim president. Subsequently, a series of mass protests broke out across the country and continued throughout the year."
        },
        "memory_initiatives": [
            "Nothing to show"
        ],
        "sites_of_memory": [
            "Nothing to show"
        ],
        "organizations": [
            "Programa Venezolano de Educaci\u00f3n-Acci\u00f3n en Derechos Humanos (PROVEA): non-governmental organization created in 1988 to advance human rights in the country.",
            "Comit\u00e9 de Familiares de V\u00edctimas del Caracazo (COFAVIC): a non-governmental organization for the promotion of human rights, created in 1989 by relatives of victims of state violence during the events of the \u201cCaracazo\u201d.",
            "Foro Penal: a non-governmental organization founded in 2005 that provides legal assistance to victims of human rights violations and those persecuted by the state.",
            "Observatorio Venezolano de Conflictividad Social (OVCS): an organization created in 2010 to monitor manifestations and the general human rights situation in the country.",
            "Centro de Paz y Justicia (CEPAJ): an organization working on the promotion of human rights, including a focus on gender issues.",
            "Independent International Fact-Finding Mission on the Bolivarian Republic of Venezuela: a body set up by the UN Human Rights Council in 2019 to investigate human rights violations that have occurred from 2014 onwards."
        ],
        "issues_specific_to_the_country": [
            "Venezuela continues to experience a social, economic, and political crisis. Since 2015, an increasing number of Venezuelan citizens have left the country, mostly to resettle in other Latin American countries, where new migrant and refugee issues have recently emerged. The UN Refugee Agency (UNHCR) has labeled the situation as one of the largest displacement crises currently unfolding across the globe."
        ]
    }
];

        // Event listeners for the sliders and search box
        d3.select("#keywordSearch").on("input", function() {
            updateVisualization();
        });

        // Initialization for the noUiSlider
        var yearRangeSlider = document.getElementById('year-range-slider');
        noUiSlider.create(yearRangeSlider, {
            start: [2018, 2020],
            connect: true,
            orientation: 'vertical',
            direction: 'rtl', // For vertical slider, to start from bottom
            range: {
                'min': 1950,
                'max': 2020
            }
        });

        // Update the visualization when the slider value changes
        yearRangeSlider.noUiSlider.on('update', function (values, handle) {
            var yearStart = parseInt(values[0]);
            var yearEnd = parseInt(values[1]);
            d3.select("#yearRangeStartLabel").text(yearStart);
            d3.select("#yearRangeEndLabel").text(yearEnd);
            updateVisualization();
        });

        function updateVisualization() {
            // Get the values from the input elements
            var startYear = parseInt(d3.select("#yearRangeStartLabel").text());
            var endYear = parseInt(d3.select("#yearRangeEndLabel").text());
            var keyword = d3.select("#keywordSearch").property("value").toLowerCase();

            // Filter the sample data based on the year range and keyword
            var filteredCountries = sampleData.filter(function(d) {
                var events = d.key_historical_events;
                var matchesKeyword = Object.values(events).some(function(event) {
                    return event.toLowerCase().includes(keyword);
                });
                var inTimeRange = Object.keys(events).some(function(year) {
                    var eventYear = parseInt(year);
                    return eventYear >= startYear && eventYear <= endYear;
                });
                return matchesKeyword && inTimeRange;
            });

            // Highlight the filtered countries
            svg.selectAll(".country")
                .classed("highlighted", function(d) {
                    return filteredCountries.map(function(c) { return c.country; }).includes(d.properties.name);
                });
        }

        function displayEventDetails(countryData) {
    // Get the values from the input elements
    var startYear = parseInt(d3.select("#yearRangeStartLabel").text());
    var endYear = parseInt(d3.select("#yearRangeEndLabel").text());
    var keyword = d3.select("#keywordSearch").property("value").toLowerCase();

    // Update the #event-details div with the country's event details
    let detailsHtml = `<h3>Events for ${countryData.country}:</h3>`;
    Object.entries(countryData.key_historical_events).forEach(function([year, event]) {
        var eventYear = parseInt(year);
        // Check if the event falls within the filtered years and matches the keyword
        if(eventYear >= startYear && eventYear <= endYear && event.toLowerCase().includes(keyword)) {
            detailsHtml += `<p><strong>${year}:</strong> ${event}</p>`;
            // Conditionally add images for specific events
            if(countryData.country === 'Argentina' && eventYear === 1973) {
                detailsHtml += `<img src="Argentina1973.jpeg" alt="Argentina 1973 event image" />`;
            } else if(countryData.country === 'Brazil' && eventYear === 1964) {
                detailsHtml += `<img src="Brazil1964.jpeg" alt="Brazil 1964 event image" />`;
            }
        }
    });
    d3.select("#event-details").html(detailsHtml);
}
