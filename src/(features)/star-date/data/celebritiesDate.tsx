export interface Celebrity {
  id: number;
  name: string;
  month: number;
  day: number;
  image: string;
  bio: string;
  achievement: string;
}

export const celebritiesDate: Celebrity[] = [
  {
    id: 1,
    name: "Albert Einstein",
    month: 3,
    day: 14,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg",
    bio: "Theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is known for its influence on the philosophy of science and he received the Nobel Prize in Physics in 1921.",
    achievement: "Father of Modern Physics"
  },
  {
    id: 2,
    name: "Leonardo DiCaprio",
    month: 11,
    day: 11,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/500px-Leonardo_DiCaprio_2014.jpg",
    bio: "Award-winning actor and environmental activist known for his transformative roles in films like Titanic, Inception, and The Revenant. He's also a prominent advocate for environmental causes through his foundation.",
    achievement: "Academy Award Winner"
  },
  {
    id: 3,
    name: "Oprah Winfrey",
    month: 1,
    day: 29,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Oprah_in_2014.jpg/500px-Oprah_in_2014.jpg",
    bio: "Media executive, actress, talk show host, and philanthropist. Best known for her talk show, which was the highest-rated television program of its kind in history and ran for 25 years.",
    achievement: "Media Mogul & Philanthropist"
  },
  {
    id: 4,
    name: "Taylor Swift",
    month: 12,
    day: 13,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Taylor_Swift_55th_GRAMMYs_2023.png/500px-Taylor_Swift_55th_GRAMMYs_2023.png",
    bio: "Singer-songwriter known for narrative songs about her personal life. She has received numerous awards including 12 Grammy Awards and is one of the best-selling music artists of all time.",
    achievement: "Multi-Grammy Award Winner"
  },
  {
    id: 5,
    name: "Stephen Hawking",
    month: 1,
    day: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/500px-Stephen_Hawking.StarChild.jpg",
    bio: "Theoretical physicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at Cambridge. His work on black holes and relativity revolutionized our understanding of the universe.",
    achievement: "Renowned Cosmologist"
  },
  {
    id: 6,
    name: "Beyoncé",
    month: 9,
    day: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png/500px-Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png",
    bio: "Singer, songwriter, and actress who rose to fame as lead singer of Destiny's Child. She has won 32 Grammy Awards and is known for her powerful vocals, elaborate performances, and cultural impact.",
    achievement: "Most Grammy-Awarded Singer"
  },
  {
    id: 7,
    name: "Elon Musk",
    month: 6,
    day: 28,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/500px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    bio: "Entrepreneur and business magnate, founder of SpaceX and CEO of Tesla. He has revolutionized multiple industries including electric vehicles, space exploration, and sustainable energy solutions.",
    achievement: "Tech Visionary & Innovator"
  },
  {
    id: 8,
    name: "Marie Curie",
    month: 11,
    day: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/500px-Marie_Curie_c._1920s.jpg",
    bio: "Physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different sciences.",
    achievement: "Two-Time Nobel Laureate"
  },
  {
    id: 9,
    name: "Nelson Mandela",
    month: 7,
    day: 18,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela_1994.jpg/500px-Nelson_Mandela_1994.jpg",
    bio: "Anti-apartheid revolutionary and political leader who served as President of South Africa. He was a global advocate for human rights and received the Nobel Peace Prize in 1993.",
    achievement: "Nobel Peace Prize Winner"
  },
  {
    id: 10,
    name: "Steve Jobs",
    month: 2,
    day: 24,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/500px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    bio: "Co-founder of Apple Inc. and pioneering entrepreneur who revolutionized personal computing, animated films, music, phones, and digital publishing. His vision transformed multiple industries.",
    achievement: "Technology Revolutionary"
  },
  {
    id: 11,
    name: "Serena Williams",
    month: 9,
    day: 26,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Serena_Williams_at_2013_US_Open.jpg/500px-Serena_Williams_at_2013_US_Open.jpg",
    bio: "Professional tennis player widely regarded as one of the greatest athletes of all time. She has won 23 Grand Slam singles titles and has dominated women's tennis for over two decades.",
    achievement: "23-Time Grand Slam Champion"
  },
  {
    id: 12,
    name: "William Shakespeare",
    month: 4,
    day: 23,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/500px-Shakespeare.jpg",
    bio: "English playwright, poet, and actor, widely regarded as the greatest writer in the English language. His works have been translated into every major language and are performed more often than those of any other playwright.",
    achievement: "Literary Legend"
  },
  {
    id: 13,
    name: "Martin Luther King Jr.",
    month: 1,
    day: 15,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/500px-Martin_Luther_King%2C_Jr..jpg",
    bio: "American Baptist minister and activist who became the most visible spokesperson and leader in the civil rights movement. He is best known for his role in the advancement of civil rights using nonviolent civil disobedience.",
    achievement: "Civil Rights Leader"
  },
  {
    id: 14,
    name: "Malala Yousafzai",
    month: 7,
    day: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Malala_Yousafzai_-_2018_%2841958418041%29_%28cropped%29.jpg/500px-Malala_Yousafzai_-_2018_%2841958418041%29_%28cropped%29.jpg",
    bio: "Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially education for women in her native Swat Valley in Khyber Pakhtunkhwa, northwest Pakistan.",
    achievement: "Youngest Nobel Prize Laureate"
  },
  {
    id: 15,
    name: "Michael Jordan",
    month: 2,
    day: 17,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Michael_Jordan_in_2014.jpg/500px-Michael_Jordan_in_2014.jpg",
    bio: "Former professional basketball player and businessman. Widely considered the greatest basketball player of all time, he won six NBA championships with the Chicago Bulls and revolutionized the sport globally.",
    achievement: "6-Time NBA Champion"
  },
  {
    id: 16,
    name: "Frida Kahlo",
    month: 7,
    day: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/500px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    bio: "Mexican artist who painted many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Her work was influenced by indigenous Mexican culture and she explored questions of identity, postcolonialism, and gender.",
    achievement: "Iconic Mexican Artist"
  },
  {
    id: 17,
    name: "Neil Armstrong",
    month: 8,
    day: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/500px-Neil_Armstrong_pose.jpg",
    bio: "American astronaut and aeronautical engineer who became the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor. His famous words were 'That's one small step for man, one giant leap for mankind.'",
    achievement: "First Person on the Moon"
  },
  {
    id: 18,
    name: "Maya Angelou",
    month: 4,
    day: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg/500px-Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg",
    bio: "American poet, memoirist, and civil rights activist. She published seven autobiographies, three books of essays, several books of poetry, and is credited with a list of plays, movies, and television shows spanning over 50 years.",
    achievement: "Renowned Poet & Civil Rights Activist"
  },
  {
    id: 19,
    name: "Bruce Lee",
    month: 11,
    day: 27,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bruce_Lee_1973.jpg/500px-Bruce_Lee_1973.jpg",
    bio: "Hong Kong-American martial artist, actor, director, martial arts instructor and philosopher. He is considered by some commentators and critics to be the most influential martial artist of all time and a pop culture icon of the 20th century.",
    achievement: "Martial Arts Legend"
  },
  {
    id: 20,
    name: "Jane Goodall",
    month: 4,
    day: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Jane_Goodall_2015.jpg/500px-Jane_Goodall_2015.jpg",
    bio: "English primatologist and anthropologist. Considered to be the world's foremost expert on chimpanzees, Goodall is best known for her 60-year study of social and family interactions of wild chimpanzees in Gombe Stream National Park, Tanzania.",
    achievement: "Primatology Pioneer"
  },
  {
    id: 21,
    name: "Pablo Picasso",
    month: 10,
    day: 25,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/500px-Pablo_picasso_1.jpg",
    bio: "Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he co-founded the Cubist movement and invented constructed sculpture.",
    achievement: "Co-founder of Cubism"
  },
  {
    id: 22,
    name: "Coco Chanel",
    month: 8,
    day: 19,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Coco_Chanel_1920.jpg/500px-Coco_Chanel_1920.jpg",
    bio: "French fashion designer and businesswoman. The founder and namesake of the Chanel brand, she was credited in the post-World War I era with liberating women from the constraints of the 'corseted silhouette' and popularizing sporty, casual chic.",
    achievement: "Fashion Icon"
  },
  {
    id: 23,
    name: "Charles Darwin",
    month: 2,
    day: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/500px-Charles_Darwin_seated_crop.jpg",
    bio: "English naturalist, geologist and biologist, best known for his contributions to evolutionary biology. His proposition that all species of life have descended from common ancestors is now widely accepted and considered a fundamental concept in science.",
    achievement: "Theory of Evolution"
  },
  {
    id: 24,
    name: "Rosa Parks",
    month: 2,
    day: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/500px-Rosaparks.jpg",
    bio: "American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. The United States Congress has called her 'the first lady of civil rights' and 'the mother of the freedom movement.'",
    achievement: "Civil Rights Pioneer"
  },
  {
    id: 25,
    name: "Michelle Obama",
    month: 1,
    day: 17,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/500px-Michelle_Obama_2013_official_portrait.jpg",
    bio: "American attorney and author who served as first lady of the United States from 2009 to 2017. She was the first African-American first lady and founded the Let's Move! initiative to combat childhood obesity.",
    achievement: "Former First Lady & Advocate"
  },
  {
    id: 26,
    name: "David Attenborough",
    month: 5,
    day: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/David_Attenborough_2015.jpg/500px-David_Attenborough_2015.jpg",
    bio: "English broadcaster, biologist, natural historian and author. Best known for writing and presenting the BBC's Life series, which collectively form a comprehensive survey of animal and plant life on Earth.",
    achievement: "Renowned Natural Historian"
  },
  {
    id: 27,
    name: "Amelia Earhart",
    month: 7,
    day: 24,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Amelia_Earhart_1937.png/500px-Amelia_Earhart_1937.png",
    bio: "American aviation pioneer and writer. She was the first female aviator to fly solo across the Atlantic Ocean and set many other records. She disappeared in 1937 while attempting to circumnavigate the globe.",
    achievement: "Aviation Pioneer"
  },
  {
    id: 28,
    name: "Vincent van Gogh",
    month: 3,
    day: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
    bio: "Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created approximately 2,100 artworks, including around 860 oil paintings.",
    achievement: "Post-Impressionist Master"
  },
  {
    id: 29,
    name: "Muhammad Ali",
    month: 1,
    day: 17,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/500px-Muhammad_Ali_NYWTS.jpg",
    bio: "American professional boxer, activist, and philanthropist. Nicknamed 'The Greatest', he is regarded as one of the most significant sports figures of the 20th century and one of the greatest boxers of all time.",
    achievement: "Boxing Legend & Activist"
  },
  {
    id: 30,
    name: "J.K. Rowling",
    month: 7,
    day: 31,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/500px-J._K._Rowling_2010.jpg",
    bio: "British author and philanthropist best known for writing the Harry Potter fantasy series. The books have won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.",
    achievement: "Harry Potter Author"
  },
  {
    id: 31,
    name: "Walt Disney",
    month: 12,
    day: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Walt_Disney_1946.JPG/500px-Walt_Disney_1946.JPG",
    bio: "American animator, film producer and entrepreneur. A pioneer of the American animation industry, he introduced several developments in the production of cartoons and created Disneyland, the world's first theme park.",
    achievement: "Animation Pioneer"
  },
  {
    id: 32,
    name: "Mother Teresa",
    month: 8,
    day: 26,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/500px-Mother_Teresa_1.jpg",
    bio: "Albanian-Indian Catholic nun and missionary who founded the Missionaries of Charity. She spent many years in Kolkata where she ministered to the poor, sick, orphaned, and dying.",
    achievement: "Nobel Peace Prize 1979"
  },
  {
    id: 33,
    name: "Mark Zuckerberg",
    month: 5,
    day: 14,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/500px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    bio: "American business magnate, internet entrepreneur, and philanthropist. He co-founded Facebook, now Meta Platforms, and serves as its chairman, chief executive officer, and controlling shareholder.",
    achievement: "Facebook Co-founder"
  },
  {
    id: 34,
    name: "Princess Diana",
    month: 7,
    day: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Diana_1997_%28cropped%29.jpg/500px-Diana_1997_%28cropped%29.jpg",
    bio: "British member of the royal family who was the first wife of King Charles III. She was known for her charity work and campaigns against landmines, as well as her support for numerous humanitarian causes.",
    achievement: "Humanitarian & Royal"
  },
  {
    id: 35,
    name: "Nikola Tesla",
    month: 7,
    day: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/500px-N.Tesla.JPG",
    bio: "Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.",
    achievement: "Electrical Engineering Pioneer"
  },
  {
    id: 36,
    name: "Audrey Hepburn",
    month: 5,
    day: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Audrey_Hepburn_1956.jpg/500px-Audrey_Hepburn_1956.jpg",
    bio: "British actress and humanitarian. Recognized as both a film and fashion icon, she was ranked by the American Film Institute as the third-greatest female screen legend from the Classical Hollywood cinema.",
    achievement: "Actress & Humanitarian"
  },
  {
    id: 37,
    name: "Bill Gates",
    month: 10,
    day: 28,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/500px-Bill_Gates_2018.jpg",
    bio: "American business magnate, software developer, investor, author, and philanthropist. He co-founded Microsoft Corporation and is known for his extensive philanthropic work through the Bill & Melinda Gates Foundation.",
    achievement: "Microsoft Co-founder"
  },
  {
    id: 38,
    name: "Freddie Mercury",
    month: 9,
    day: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/500px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
    bio: "British singer, songwriter, and lead vocalist of the rock band Queen. Known for his flamboyant stage persona and four-octave vocal range, he is regarded as one of the greatest singers in the history of rock music.",
    achievement: "Queen Frontman"
  },
  {
    id: 39,
    name: "Ruth Bader Ginsburg",
    month: 3,
    day: 15,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg/500px-Ruth_Bader_Ginsburg_2016_portrait.jpg",
    bio: "American lawyer and jurist who served as an associate justice of the Supreme Court of the United States from 1993 until her death in 2020. She was the second woman to serve on the Supreme Court.",
    achievement: "Supreme Court Justice"
  },
  {
    id: 40,
    name: "Usain Bolt",
    month: 8,
    day: 21,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Usain_Bolt_after_4_x_100_m_relay_final_Rio_2016.jpg/500px-Usain_Bolt_after_4_x_100_m_relay_final_Rio_2016.jpg",
    bio: "Jamaican retired sprinter, widely considered to be the greatest sprinter of all time. He is the world record holder in the 100 metres, 200 metres, and 4 × 100 metres relay.",
    achievement: "World's Fastest Man"
  },
  {
    id: 41,
    name: "Anne Frank",
    month: 6,
    day: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Anne_Frank_%28school_photo%2C_crop%29.jpg/500px-Anne_Frank_%28school_photo%2C_crop%29.jpg",
    bio: "German-Dutch diarist of Jewish heritage. One of the most discussed Jewish victims of the Holocaust, she gained fame posthumously with the publication of The Diary of a Young Girl documenting her life in hiding.",
    achievement: "Diarist & Holocaust Victim"
  },
  {
    id: 42,
    name: "Roger Federer",
    month: 8,
    day: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Roger_Federer_2012_Indian_Wells.jpg/500px-Roger_Federer_2012_Indian_Wells.jpg",
    bio: "Swiss former professional tennis player. Federer was ranked world No. 1 by the Association of Tennis Professionals for 310 weeks, including a record 237 consecutive weeks, and won 20 Grand Slam men's singles titles.",
    achievement: "20-Time Grand Slam Champion"
  },
  {
    id: 43,
    name: "Catherine the Great",
    month: 5,
    day: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Vigilius_Eriksen_-_Portrait_of_Catherine_II_in_her_coronation_robes_-_Google_Art_Project.jpg/500px-Vigilius_Eriksen_-_Portrait_of_Catherine_II_in_her_coronation_robes_-_Google_Art_Project.jpg",
    bio: "Empress of Russia from 1762 until 1796, the country's longest-ruling female leader. She came to power following a coup d'état that overthrew her husband, Peter III, and greatly expanded Russian territory.",
    achievement: "Longest-ruling Female Russian Leader"
  },
  {
    id: 44,
    name: "Bob Marley",
    month: 2,
    day: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bob-Marley.jpg/500px-Bob-Marley.jpg",
    bio: "Jamaican singer, musician, and songwriter. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style.",
    achievement: "Reggae Legend"
  },
  {
    id: 45,
    name: "Indira Gandhi",
    month: 11,
    day: 19,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Indira_Gandhi_1967.jpg/500px-Indira_Gandhi_1967.jpg",
    bio: "Indian politician and stateswoman who served as the third prime minister of India from 1966 to 1977 and again from 1980 until her assassination in 1984. She was India's first and only female prime minister.",
    achievement: "First Female Prime Minister of India"
  },
  {
    id: 46,
    name: "Stephen King",
    month: 9,
    day: 21,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Stephen_King_2011.jpg/500px-Stephen_King_2011.jpg",
    bio: "American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Described as the 'King of Horror', his books have sold more than 350 million copies.",
    achievement: "Bestselling Author"
  },
  {
    id: 47,
    name: "Meryl Streep",
    month: 6,
    day: 22,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/500px-Meryl_Streep_December_2018.jpg",
    bio: "American actress. Often described as 'the best actress of her generation', Streep is particularly known for her versatility and accent adaptation. She has received numerous accolades throughout her career.",
    achievement: "Academy Award-Winning Actress"
  },
  {
    id: 48,
    name: "Winston Churchill",
    month: 11,
    day: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/500px-Sir_Winston_Churchill_-_19086236948.jpg",
    bio: "British statesman, soldier, and writer who served as Prime Minister of the United Kingdom from 1940 to 1945 and again from 1951 to 1955. He led Britain to victory in the Second World War.",
    achievement: "Wartime Prime Minister"
  }
];