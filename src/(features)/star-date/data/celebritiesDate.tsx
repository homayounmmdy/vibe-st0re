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
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg",
    bio: "Theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is known for its influence on the philosophy of science and he received the Nobel Prize in Physics in 1921.",
    achievement: "Father of Modern Physics",
  },
  {
    id: 2,
    name: "Leonardo DiCaprio",
    month: 11,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/500px-Leonardo_DiCaprio_2014.jpg",
    bio: "Award-winning actor and environmental activist known for his transformative roles in films like Titanic, Inception, and The Revenant. He's also a prominent advocate for environmental causes through his foundation.",
    achievement: "Academy Award Winner",
  },
  {
    id: 3,
    name: "Oprah Winfrey",
    month: 1,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Oprah_in_2014.jpg/500px-Oprah_in_2014.jpg",
    bio: "Media executive, actress, talk show host, and philanthropist. Best known for her talk show, which was the highest-rated television program of its kind in history and ran for 25 years.",
    achievement: "Media Mogul & Philanthropist",
  },
  {
    id: 4,
    name: "Taylor Swift",
    month: 12,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/500px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png",
    bio: "Singer-songwriter known for narrative songs about her personal life. She has received numerous awards including 12 Grammy Awards and is one of the best-selling music artists of all time.",
    achievement: "Multi-Grammy Award Winner",
  },
  {
    id: 5,
    name: "Stephen Hawking",
    month: 1,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/500px-Stephen_Hawking.StarChild.jpg",
    bio: "Theoretical physicist, cosmologist, and author who was director of research at the Centre for Theoretical Cosmology at Cambridge. His work on black holes and relativity revolutionized our understanding of the universe.",
    achievement: "Renowned Cosmologist",
  },
  {
    id: 6,
    name: "Beyoncé",
    month: 9,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png/500px-Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png",
    bio: "Singer, songwriter, and actress who rose to fame as lead singer of Destiny's Child. She has won 32 Grammy Awards and is known for her powerful vocals, elaborate performances, and cultural impact.",
    achievement: "Most Grammy-Awarded Singer",
  },
  {
    id: 7,
    name: "Elon Musk",
    month: 6,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/500px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    bio: "Entrepreneur and business magnate, founder of SpaceX and CEO of Tesla. He has revolutionized multiple industries including electric vehicles, space exploration, and sustainable energy solutions.",
    achievement: "Tech Visionary & Innovator",
  },
  {
    id: 8,
    name: "Marie Curie",
    month: 11,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/500px-Marie_Curie_c._1920s.jpg",
    bio: "Physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different sciences.",
    achievement: "Two-Time Nobel Laureate",
  },
  {
    id: 9,
    name: "Nelson Mandela",
    month: 7,
    day: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela_1994.jpg/500px-Nelson_Mandela_1994.jpg",
    bio: "Anti-apartheid revolutionary and political leader who served as President of South Africa. He was a global advocate for human rights and received the Nobel Peace Prize in 1993.",
    achievement: "Nobel Peace Prize Winner",
  },
  {
    id: 10,
    name: "Steve Jobs",
    month: 2,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/500px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    bio: "Co-founder of Apple Inc. and pioneering entrepreneur who revolutionized personal computing, animated films, music, phones, and digital publishing. His vision transformed multiple industries.",
    achievement: "Technology Revolutionary",
  },
  {
    id: 11,
    name: "Serena Williams",
    month: 9,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Serena_Williams_at_2013_US_Open.jpg/500px-Serena_Williams_at_2013_US_Open.jpg",
    bio: "Professional tennis player widely regarded as one of the greatest athletes of all time. She has won 23 Grand Slam singles titles and has dominated women's tennis for over two decades.",
    achievement: "23-Time Grand Slam Champion",
  },
  {
    id: 12,
    name: "William Shakespeare",
    month: 4,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/500px-Shakespeare.jpg",
    bio: "English playwright, poet, and actor, widely regarded as the greatest writer in the English language. His works have been translated into every major language and are performed more often than those of any other playwright.",
    achievement: "Literary Legend",
  },
  {
    id: 13,
    name: "Martin Luther King Jr.",
    month: 1,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/500px-Martin_Luther_King%2C_Jr..jpg",
    bio: "American Baptist minister and activist who became the most visible spokesperson and leader in the civil rights movement. He is best known for his role in the advancement of civil rights using nonviolent civil disobedience.",
    achievement: "Civil Rights Leader",
  },
  {
    id: 14,
    name: "Malala Yousafzai",
    month: 7,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Malala_Yousafzai_-_2018_%2841958418041%29_%28cropped%29.jpg/500px-Malala_Yousafzai_-_2018_%2841958418041%29_%28cropped%29.jpg",
    bio: "Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially education for women in her native Swat Valley in Khyber Pakhtunkhwa, northwest Pakistan.",
    achievement: "Youngest Nobel Prize Laureate",
  },
  {
    id: 15,
    name: "Michael Jordan",
    month: 2,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/375px-Michael_Jordan_in_2014.jpg",
    bio: "Former professional basketball player and businessman. Widely considered the greatest basketball player of all time, he won six NBA championships with the Chicago Bulls and revolutionized the sport globally.",
    achievement: "6-Time NBA Champion",
  },
  {
    id: 16,
    name: "Frida Kahlo",
    month: 7,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/500px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    bio: "Mexican artist who painted many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Her work was influenced by indigenous Mexican culture and she explored questions of identity, postcolonialism, and gender.",
    achievement: "Iconic Mexican Artist",
  },
  {
    id: 17,
    name: "Neil Armstrong",
    month: 8,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/500px-Neil_Armstrong_pose.jpg",
    bio: "American astronaut and aeronautical engineer who became the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor. His famous words were 'That's one small step for man, one giant leap for mankind.'",
    achievement: "First Person on the Moon",
  },
  {
    id: 18,
    name: "Maya Angelou",
    month: 4,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg/500px-Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg",
    bio: "American poet, memoirist, and civil rights activist. She published seven autobiographies, three books of essays, several books of poetry, and is credited with a list of plays, movies, and television shows spanning over 50 years.",
    achievement: "Renowned Poet & Civil Rights Activist",
  },
  {
    id: 19,
    name: "Bruce Lee",
    month: 11,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Bruce_Lee_1973.jpg/500px-Bruce_Lee_1973.jpg",
    bio: "Hong Kong-American martial artist, actor, director, martial arts instructor and philosopher. He is considered by some commentators and critics to be the most influential martial artist of all time and a pop culture icon of the 20th century.",
    achievement: "Martial Arts Legend",
  },
  {
    id: 20,
    name: "Jane Goodall",
    month: 4,
    day: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Jane_Goodall_2015.jpg/500px-Jane_Goodall_2015.jpg",
    bio: "English primatologist and anthropologist. Considered to be the world's foremost expert on chimpanzees, Goodall is best known for her 60-year study of social and family interactions of wild chimpanzees in Gombe Stream National Park, Tanzania.",
    achievement: "Primatology Pioneer",
  },
  {
    id: 21,
    name: "Pablo Picasso",
    month: 10,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/500px-Pablo_picasso_1.jpg",
    bio: "Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he co-founded the Cubist movement and invented constructed sculpture.",
    achievement: "Co-founder of Cubism",
  },
  {
    id: 22,
    name: "Coco Chanel",
    month: 8,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Coco_Chanel_in_Los_Angeles%2C_1931_%28cropped%29.jpg/375px-Coco_Chanel_in_Los_Angeles%2C_1931_%28cropped%29.jpg",
    bio: "French fashion designer and businesswoman. The founder and namesake of the Chanel brand, she was credited in the post-World War I era with liberating women from the constraints of the 'corseted silhouette' and popularizing sporty, casual chic.",
    achievement: "Fashion Icon",
  },
  {
    id: 23,
    name: "Charles Darwin",
    month: 2,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/500px-Charles_Darwin_seated_crop.jpg",
    bio: "English naturalist, geologist and biologist, best known for his contributions to evolutionary biology. His proposition that all species of life have descended from common ancestors is now widely accepted and considered a fundamental concept in science.",
    achievement: "Theory of Evolution",
  },
  {
    id: 24,
    name: "Rosa Parks",
    month: 2,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/500px-Rosaparks.jpg",
    bio: "American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. The United States Congress has called her 'the first lady of civil rights' and 'the mother of the freedom movement.'",
    achievement: "Civil Rights Pioneer",
  },
  {
    id: 25,
    name: "Michelle Obama",
    month: 1,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/500px-Michelle_Obama_2013_official_portrait.jpg",
    bio: "American attorney and author who served as first lady of the United States from 2009 to 2017. She was the first African-American first lady and founded the Let's Move! initiative to combat childhood obesity.",
    achievement: "Former First Lady & Advocate",
  },
  {
    id: 26,
    name: "David Attenborough",
    month: 5,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/David_Attenborough_2015.jpg/500px-David_Attenborough_2015.jpg",
    bio: "English broadcaster, biologist, natural historian and author. Best known for writing and presenting the BBC's Life series, which collectively form a comprehensive survey of animal and plant life on Earth.",
    achievement: "Renowned Natural Historian",
  },
  {
    id: 27,
    name: "Amelia Earhart",
    month: 7,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Amelia_Earhart_1937.png/500px-Amelia_Earhart_1937.png",
    bio: "American aviation pioneer and writer. She was the first female aviator to fly solo across the Atlantic Ocean and set many other records. She disappeared in 1937 while attempting to circumnavigate the globe.",
    achievement: "Aviation Pioneer",
  },
  {
    id: 28,
    name: "Vincent van Gogh",
    month: 3,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
    bio: "Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created approximately 2,100 artworks, including around 860 oil paintings.",
    achievement: "Post-Impressionist Master",
  },
  {
    id: 29,
    name: "Muhammad Ali",
    month: 1,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/500px-Muhammad_Ali_NYWTS.jpg",
    bio: "American professional boxer, activist, and philanthropist. Nicknamed 'The Greatest', he is regarded as one of the most significant sports figures of the 20th century and one of the greatest boxers of all time.",
    achievement: "Boxing Legend & Activist",
  },
  {
    id: 30,
    name: "J.K. Rowling",
    month: 7,
    day: 31,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/500px-J._K._Rowling_2010.jpg",
    bio: "British author and philanthropist best known for writing the Harry Potter fantasy series. The books have won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.",
    achievement: "Harry Potter Author",
  },
  {
    id: 31,
    name: "Walt Disney",
    month: 12,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Walt_Disney_1946.JPG/500px-Walt_Disney_1946.JPG",
    bio: "American animator, film producer and entrepreneur. A pioneer of the American animation industry, he introduced several developments in the production of cartoons and created Disneyland, the world's first theme park.",
    achievement: "Animation Pioneer",
  },
  {
    id: 32,
    name: "Mother Teresa",
    month: 8,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/500px-Mother_Teresa_1.jpg",
    bio: "Albanian-Indian Catholic nun and missionary who founded the Missionaries of Charity. She spent many years in Kolkata where she ministered to the poor, sick, orphaned, and dying.",
    achievement: "Nobel Peace Prize 1979",
  },
  {
    id: 33,
    name: "Mark Zuckerberg",
    month: 5,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/500px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    bio: "American business magnate, internet entrepreneur, and philanthropist. He co-founded Facebook, now Meta Platforms, and serves as its chairman, chief executive officer, and controlling shareholder.",
    achievement: "Facebook Co-founder",
  },
  {
    id: 34,
    name: "Princess Diana",
    month: 7,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Diana_1997_%28cropped%29.jpg/500px-Diana_1997_%28cropped%29.jpg",
    bio: "British member of the royal family who was the first wife of King Charles III. She was known for her charity work and campaigns against landmines, as well as her support for numerous humanitarian causes.",
    achievement: "Humanitarian & Royal",
  },
  {
    id: 35,
    name: "Nikola Tesla",
    month: 7,
    day: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/500px-N.Tesla.JPG",
    bio: "Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.",
    achievement: "Electrical Engineering Pioneer",
  },
  {
    id: 36,
    name: "Audrey Hepburn",
    month: 5,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Audrey_Hepburn_1956.jpg/500px-Audrey_Hepburn_1956.jpg",
    bio: "British actress and humanitarian. Recognized as both a film and fashion icon, she was ranked by the American Film Institute as the third-greatest female screen legend from the Classical Hollywood cinema.",
    achievement: "Actress & Humanitarian",
  },
  {
    id: 37,
    name: "Bill Gates",
    month: 10,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/500px-Bill_Gates_2018.jpg",
    bio: "American business magnate, software developer, investor, author, and philanthropist. He co-founded Microsoft Corporation and is known for his extensive philanthropic work through the Bill & Melinda Gates Foundation.",
    achievement: "Microsoft Co-founder",
  },
  {
    id: 38,
    name: "Freddie Mercury",
    month: 9,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/500px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
    bio: "British singer, songwriter, and lead vocalist of the rock band Queen. Known for his flamboyant stage persona and four-octave vocal range, he is regarded as one of the greatest singers in the history of rock music.",
    achievement: "Queen Frontman",
  },
  {
    id: 39,
    name: "Ruth Bader Ginsburg",
    month: 3,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg/500px-Ruth_Bader_Ginsburg_2016_portrait.jpg",
    bio: "American lawyer and jurist who served as an associate justice of the Supreme Court of the United States from 1993 until her death in 2020. She was the second woman to serve on the Supreme Court.",
    achievement: "Supreme Court Justice",
  },
  {
    id: 40,
    name: "Usain Bolt",
    month: 8,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Usain_Bolt_after_4_x_100_m_relay_final_Rio_2016.jpg/500px-Usain_Bolt_after_4_x_100_m_relay_final_Rio_2016.jpg",
    bio: "Jamaican retired sprinter, widely considered to be the greatest sprinter of all time. He is the world record holder in the 100 metres, 200 metres, and 4 × 100 metres relay.",
    achievement: "World's Fastest Man",
  },
  {
    id: 41,
    name: "Anne Frank",
    month: 6,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Anne_Frank_%28school_photo%2C_crop%29.jpg/500px-Anne_Frank_%28school_photo%2C_crop%29.jpg",
    bio: "German-Dutch diarist of Jewish heritage. One of the most discussed Jewish victims of the Holocaust, she gained fame posthumously with the publication of The Diary of a Young Girl documenting her life in hiding.",
    achievement: "Diarist & Holocaust Victim",
  },
  {
    id: 42,
    name: "Roger Federer",
    month: 8,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Roger_Federer_2012_Indian_Wells.jpg/500px-Roger_Federer_2012_Indian_Wells.jpg",
    bio: "Swiss former professional tennis player. Federer was ranked world No. 1 by the Association of Tennis Professionals for 310 weeks, including a record 237 consecutive weeks, and won 20 Grand Slam men's singles titles.",
    achievement: "20-Time Grand Slam Champion",
  },
  {
    id: 43,
    name: "Catherine the Great",
    month: 5,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Vigilius_Eriksen_-_Portrait_of_Catherine_II_in_her_coronation_robes_-_Google_Art_Project.jpg/500px-Vigilius_Eriksen_-_Portrait_of_Catherine_II_in_her_coronation_robes_-_Google_Art_Project.jpg",
    bio: "Empress of Russia from 1762 until 1796, the country's longest-ruling female leader. She came to power following a coup d'état that overthrew her husband, Peter III, and greatly expanded Russian territory.",
    achievement: "Longest-ruling Female Russian Leader",
  },
  {
    id: 44,
    name: "Bob Marley",
    month: 2,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bob-Marley.jpg/500px-Bob-Marley.jpg",
    bio: "Jamaican singer, musician, and songwriter. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style.",
    achievement: "Reggae Legend",
  },
  {
    id: 45,
    name: "Indira Gandhi",
    month: 11,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Indira_Gandhi_1967.jpg/500px-Indira_Gandhi_1967.jpg",
    bio: "Indian politician and stateswoman who served as the third prime minister of India from 1966 to 1977 and again from 1980 until her assassination in 1984. She was India's first and only female prime minister.",
    achievement: "First Female Prime Minister of India",
  },
  {
    id: 46,
    name: "Stephen King",
    month: 9,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Stephen_King_2011.jpg/500px-Stephen_King_2011.jpg",
    bio: "American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels. Described as the 'King of Horror', his books have sold more than 350 million copies.",
    achievement: "Bestselling Author",
  },
  {
    id: 47,
    name: "Meryl Streep",
    month: 6,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/500px-Meryl_Streep_December_2018.jpg",
    bio: "American actress. Often described as 'the best actress of her generation', Streep is particularly known for her versatility and accent adaptation. She has received numerous accolades throughout her career.",
    achievement: "Academy Award-Winning Actress",
  },
  {
    id: 48,
    name: "Winston Churchill",
    month: 11,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/500px-Sir_Winston_Churchill_-_19086236948.jpg",
    bio: "British statesman, soldier, and writer who served as Prime Minister of the United Kingdom from 1940 to 1945 and again from 1951 to 1955. He led Britain to victory in the Second World War.",
    achievement: "Wartime Prime Minister",
  },
  {
    id: 49,
    name: "Dwayne Johnson",
    month: 5,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dwayne_Johnson_2022_%28cropped%29.jpg/500px-Dwayne_Johnson_2022_%28cropped%29.jpg",
    bio: "American actor, film producer, and former professional wrestler. Widely known by his ring name 'The Rock', he is one of the highest-paid actors in the world and was a successful wrestler in the WWE.",
    achievement: "Highest-Paid Actor",
  },
  {
    id: 50,
    name: "Ada Lovelace",
    month: 12,
    day: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ada_Lovelace.jpg/500px-Ada_Lovelace.jpg",
    bio: "English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She is considered the first computer programmer.",
    achievement: "First Computer Programmer",
  },
  {
    id: 51,
    name: "John Lennon",
    month: 10,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/500px-John_Lennon_1969_%28cropped%29.jpg",
    bio: "English singer, songwriter, musician and peace activist who achieved worldwide fame as founder, co-songwriter, co-lead vocalist and rhythm guitarist of the Beatles. His songwriting partnership with Paul McCartney remains the most successful in history.",
    achievement: "The Beatles Co-founder",
  },
  {
    id: 52,
    name: "Virat Kohli",
    month: 11,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Virat_Kohli_in_2022.jpg/500px-Virat_Kohli_in_2022.jpg",
    bio: "Indian international cricketer and former captain of the Indian national team. Considered one of the greatest batsmen of all time, he holds numerous records including being the highest run-scorer in T20I and IPL cricket.",
    achievement: "Cricket Legend",
  },
  {
    id: 53,
    name: "Ratan Tata",
    month: 12,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ratan_Tata_photo.jpg/500px-Ratan_Tata_photo.jpg",
    bio: "Indian industrialist, philanthropist and former chairman of Tata Sons. He was the chairman of the Tata Group from 1990 to 2012, and continues to head its charitable trusts. He is known for his ethical business practices and philanthropy.",
    achievement: "Industrialist & Philanthropist",
  },
  {
    id: 54,
    name: "Emma Watson",
    month: 4,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/500px-Emma_Watson_2013.jpg",
    bio: "English actress and activist known for her role as Hermione Granger in the Harry Potter film series. She is a UN Women Goodwill Ambassador and co-founder of the HeForShe campaign, advocating for gender equality.",
    achievement: "Actress & UN Women Advocate",
  },
  {
    id: 55,
    name: "Sachin Tendulkar",
    month: 4,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/500px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",
    bio: "Indian former international cricketer and former captain of the Indian national team. Widely regarded as one of the greatest batsmen in the history of cricket, he is the highest run-scorer of all time in international cricket.",
    achievement: "Cricket Master Blaster",
  },
  {
    id: 56,
    name: "Ellen DeGeneres",
    month: 1,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/500px-Ellen_DeGeneres_2011.jpg",
    bio: "American comedian, television host, actress, writer, and producer. She hosted the syndicated television talk show The Ellen DeGeneres Show from 2003 to 2022 and was a pioneer for LGBTQ+ representation in media.",
    achievement: "Talk Show Host & Comedian",
  },
  {
    id: 57,
    name: "Jackie Chan",
    month: 4,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jackie_Chan_Signature.svg/500px-Jackie_Chan_Signature.svg.png",
    bio: "Hong Kong actor, filmmaker, martial artist, and stuntman known for his slapstick acrobatic fighting style, comic timing, and innovative stunts. He has appeared in over 150 films and is a global cultural icon.",
    achievement: "Martial Arts Film Star",
  },
  {
    id: 58,
    name: "Malcolm X",
    month: 5,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Malcolm_X_NYWTS_2a.jpg/500px-Malcolm_X_NYWTS_2a.jpg",
    bio: "American Muslim minister and human rights activist who was a prominent figure during the civil rights movement. He was a vocal advocate for Black empowerment and the promotion of Islam within the Black community.",
    achievement: "Civil Rights Leader",
  },
  {
    id: 59,
    name: "Priyanka Chopra",
    month: 7,
    day: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Priyanka_Chopra_2023.jpg/500px-Priyanka_Chopra_2023.jpg",
    bio: "Indian actress, film producer, and singer who won the Miss World 2000 pageant. One of India's highest-paid and most popular entertainers, she has expanded her career to American television and Hollywood films.",
    achievement: "Actress & Global Icon",
  },
  {
    id: 60,
    name: "Tim Berners-Lee",
    month: 6,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/500px-Sir_Tim_Berners-Lee_%28cropped%29.jpg",
    bio: "English computer scientist best known as the inventor of the World Wide Web. He made the first proposal for it in 1989 and implemented the first successful communication between a Hypertext Transfer Protocol client and server via the Internet.",
    achievement: "Inventor of the World Wide Web",
  },
  {
    id: 61,
    name: "Adele",
    month: 5,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Adele_2016.jpg/500px-Adele_2016.jpg",
    bio: "English singer and songwriter. Known for her powerful vocals and soulful ballads, she has won numerous awards including 16 Grammy Awards and has sold over 120 million records worldwide, making her one of the best-selling music artists.",
    achievement: "Multi-Grammy Award Winner",
  },
  {
    id: 62,
    name: "Sundar Pichai",
    month: 6,
    day: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/500px-Sundar_pichai.png",
    bio: "Indian-American business executive, CEO of Alphabet Inc. and its subsidiary Google. He joined Google in 2004 and helped lead the development of Google Chrome and Chrome OS before being appointed CEO in 2015.",
    achievement: "CEO of Alphabet & Google",
  },
  {
    id: 63,
    name: "Rihanna",
    month: 2,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/500px-Rihanna_Fenty_2018.png",
    bio: "Barbadian singer, actress, fashion designer, and businesswoman. Known for versatility in music and fashion, she has won numerous awards and is one of the best-selling music artists of all time. She founded the Fenty beauty brand.",
    achievement: "Singer & Businesswoman",
  },
  {
    id: 64,
    name: "Nawal El Saadawi",
    month: 10,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nawal_El_Saadawi_2007.jpg/500px-Nawal_El_Saadawi_2007.jpg",
    bio: "Egyptian feminist writer, activist, physician, and psychiatrist. She wrote many books on the subject of women in Islam, paying particular attention to the practice of female genital mutilation in her society.",
    achievement: "Feminist Writer & Activist",
  },
  {
    id: 65,
    name: "Tom Hanks",
    month: 7,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tom_Hanks_2014.jpg/500px-Tom_Hanks_2014.jpg",
    bio: "American actor and filmmaker. Known for his comedic and dramatic roles, he is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.",
    achievement: "Academy Award-Winning Actor",
  },
  {
    id: 66,
    name: "Yayoi Kusama",
    month: 3,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Yayoi_Kusama_2016.jpg/500px-Yayoi_Kusama_2016.jpg",
    bio: "Japanese contemporary artist who works primarily in sculpture and installation, but is also active in painting, performance, film, fashion, poetry, fiction, and other arts. Known for her infinity mirror rooms and polka dot patterns.",
    achievement: "Contemporary Artist",
  },
  {
    id: 67,
    name: "Jeff Bezos",
    month: 1,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/500px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
    bio: "American entrepreneur, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon, the world's largest e-commerce and cloud computing company.",
    achievement: "Amazon Founder",
  },
  {
    id: 68,
    name: "Frida Kahlo",
    month: 7,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/500px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    bio: "Mexican artist known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Her work was influenced by indigenous Mexican culture and she explored questions of identity, postcolonialism, and gender.",
    achievement: "Iconic Mexican Artist",
  },
  {
    id: 69,
    name: "Lin-Manuel Miranda",
    month: 1,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lin-Manuel_Miranda_%26_James_McAvoy_%2848383681926%29_%28cropped%29.jpg/500px-Lin-Manuel_Miranda_%26_James_McAvoy_%2848383681926%29_%28cropped%29.jpg",
    bio: "American songwriter, actor, singer, filmmaker, and playwright. He is known for creating the Broadway musicals In the Heights and Hamilton, which achieved significant critical and commercial success.",
    achievement: "Hamilton Creator",
  },
  {
    id: 70,
    name: "Mary Kom",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mary_Kom_2012.jpg/500px-Mary_Kom_2012.jpg",
    bio: "Indian amateur boxer, politician, and incumbent Member of Parliament, Rajya Sabha. She is the only woman to win the World Amateur Boxing Championship six times, and the only female boxer to win a medal in each one of the first seven World Championships.",
    achievement: "Six-Time World Boxing Champion",
  },
  {
    id: 71,
    name: "Bob Dylan",
    month: 5,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/500px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
    bio: "American singer-songwriter. Often regarded as one of the greatest songwriters of all time, Dylan has been a major figure in popular culture during a career spanning more than 60 years. He received the Nobel Prize in Literature in 2016.",
    achievement: "Nobel Prize in Literature",
  },
  {
    id: 72,
    name: "Mindy Kaling",
    month: 6,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mindy_Kaling_2013.jpg/500px-Mindy_Kaling_2013.jpg",
    bio: "American actress, comedian, writer, and producer. She became known as a writer and actor on The Office, and later created and starred in The Mindy Project. She is known for breaking barriers for women of color in comedy.",
    achievement: "Actress & Writer",
  },
  {
    id: 73,
    name: "Rupert Grint",
    month: 8,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rupert_Grint_2016.jpg/500px-Rupert_Grint_2016.jpg",
    bio: "English actor best known for playing Ron Weasley in the Harry Potter film series. He began his acting career in school plays and at his local theatre group, making his professional acting debut at age 11.",
    achievement: "Harry Potter Star",
  },
  {
    id: 74,
    name: "Snoop Dogg",
    month: 10,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg/500px-Snoop_Dogg_2019_by_Glenn_Francis.jpg",
    bio: "American rapper, songwriter, media personality, and actor. His fame dates back to 1992 when he featured on Dr. Dre's debut solo single 'Deep Cover', and then on Dre's debut solo album The Chronic.",
    achievement: "Rap Icon",
  },
  {
    id: 75,
    name: "Jim Henson",
    month: 9,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Jim_Henson_1989.jpg/500px-Jim_Henson_1989.jpg",
    bio: "American puppeteer, animator, cartoonist, actor, inventor, and filmmaker who achieved worldwide notoriety as the creator of the Muppets. He created iconic characters like Kermit the Frog and Big Bird.",
    achievement: "Creator of The Muppets",
  },
  {
    id: 76,
    name: "Alan Rickman",
    month: 2,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Alan_Rickman_after_Seminar_%283%29.jpg/500px-Alan_Rickman_after_Seminar_%283%29.jpg",
    bio: "English actor and director known for playing a variety of roles on stage and screen. He gained international acclaim for his portrayals of Hans Gruber in Die Hard and Severus Snape in the Harry Potter film series.",
    achievement: "Acclaimed Actor",
  },
  {
    id: 77,
    name: "Chadwick Boseman",
    month: 11,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chadwick_Boseman_by_Gage_Skidmore_January_2018.jpg/500px-Chadwick_Boseman_by_Gage_Skidmore_January_2018.jpg",
    bio: "American actor known for his portrayals of real-life historical figures like Jackie Robinson and James Brown, and for playing the Marvel Comics superhero Black Panther in the Marvel Cinematic Universe.",
    achievement: "Black Panther Star",
  },
  {
    id: 78,
    name: "Ava DuVernay",
    month: 8,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ava_DuVernay_by_Gage_Skidmore.jpg/500px-Ava_DuVernay_by_Gage_Skidmore.jpg",
    bio: "American filmmaker and film distributor. She won the directing award in the U.S. dramatic competition at the 2012 Sundance Film Festival for her second feature film Middle of Nowhere, becoming the first black woman to win the award.",
    achievement: "Acclaimed Filmmaker",
  },
  {
    id: 79,
    name: "Viggo Mortensen",
    month: 10,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Viggo_Mortensen_B_%28cropped%29.jpg/500px-Viggo_Mortensen_B_%28cropped%29.jpg",
    bio: "American actor, author, musician, photographer, poet, and painter. Best known for his role as Aragorn in the The Lord of the Rings film trilogy. He has been nominated for three Academy Awards for Best Actor.",
    achievement: "Lord of the Rings Star",
  },
  {
    id: 80,
    name: "Kevin Durant",
    month: 9,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kevin_Durant_2019.jpg/500px-Kevin_Durant_2019.jpg",
    bio: "American professional basketball player for the Phoenix Suns of the NBA. He has won two NBA championships, an NBA Most Valuable Player Award, two Finals MVP Awards, and two Olympic gold medals.",
    achievement: "NBA Champion & MVP",
  },
  {
    id: 81,
    name: "Jennifer Love Hewitt",
    month: 2,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jennifer_Love_Hewitt_2013.jpg/500px-Jennifer_Love_Hewitt_2013.jpg",
    bio: "American actress, singer, and producer. She became famous in the 1990s after her roles in the television series Party of Five and the I Know What You Did Last Summer film series.",
    achievement: "Actress & Singer",
  },
  {
    id: 82,
    name: "Dave Chappelle",
    month: 8,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dave_Chappelle_%28cropped%29.jpg/500px-Dave_Chappelle_%28cropped%29.jpg",
    bio: "American stand-up comedian and actor. Known for his satirical comedy sketch series Chappelle's Show, which ran from 2003 to 2006. He has won multiple Grammy Awards for his comedy albums.",
    achievement: "Comedian",
  },
  {
    id: 83,
    name: "Mickey Mantle",
    month: 10,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mickey_Mantle_Yankees.jpg/500px-Mickey_Mantle_Yankees.jpg",
    bio: "American professional baseball player who played his entire Major League Baseball career with the New York Yankees as a center fielder, right fielder, and first baseman. He was an All-Star for 16 seasons and won 7 World Series championships.",
    achievement: "Baseball Hall of Famer",
  },
  {
    id: 84,
    name: "F. Scott Fitzgerald",
    month: 9,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/F_Scott_Fitzgerald_1921.jpg/500px-F_Scott_Fitzgerald_1921.jpg",
    bio: "American novelist, essayist, and short story writer. He is best known for his novels depicting the flamboyance and excess of the Jazz Age, most notably The Great Gatsby, considered a masterpiece of American literature.",
    achievement: "Author of The Great Gatsby",
  },
  {
    id: 85,
    name: "Ellen Page",
    month: 2,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Elliot_Page_by_Gage_Skidmore.jpg/500px-Elliot_Page_by_Gage_Skidmore.jpg",
    bio: "Canadian actor and producer. He gained recognition for his role in the film Juno, for which he received nominations for an Academy Award, a BAFTA Award, and a Golden Globe Award. Known for his advocacy for LGBTQ+ rights.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 86,
    name: "Rashida Jones",
    month: 2,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rashida_Jones_2017.jpg/500px-Rashida_Jones_2017.jpg",
    bio: "American actress, writer, and producer. She is known for her roles as Karen Filippelli on The Office and Ann Perkins on Parks and Recreation. She has also written for television and co-wrote the screenplay for Toy Story 4.",
    achievement: "Actress & Writer",
  },
  {
    id: 87,
    name: "John Green",
    month: 8,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/John_Green_%282019%29.jpg/500px-John_Green_%282019%29.jpg",
    bio: "American author, YouTube content creator, and podcaster. His books include The Fault in Our Stars, which was adapted into a successful film. He is one half of the Vlogbrothers YouTube channel with his brother Hank.",
    achievement: "Bestselling Author",
  },
  {
    id: 88,
    name: "Kamala Harris",
    month: 10,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/500px-Kamala_Harris_Vice_Presidential_Portrait.jpg",
    bio: "American politician and attorney who is the 49th and current vice president of the United States. She is the first female vice president and the highest-ranking female official in U.S. history.",
    achievement: "Vice President of the United States",
  },
  {
    id: 89,
    name: "Pharrell Williams",
    month: 4,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pharrell_Williams_2013.jpg/500px-Pharrell_Williams_2013.jpg",
    bio: "American record producer, rapper, singer, songwriter, and fashion designer. He is known for his influential production work and hit songs like 'Happy'. He has won numerous Grammy Awards throughout his career.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 90,
    name: "Nina Simone",
    month: 2,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Nina_Simone_-1969.jpg/500px-Nina_Simone_-1969.jpg",
    bio: "American singer, songwriter, pianist, and civil rights activist. Her music spanned styles including classical, jazz, blues, folk, R&B, gospel, and pop. Known as the High Priestess of Soul for her distinctive voice.",
    achievement: "Singer & Civil Rights Activist",
  },
  {
    id: 91,
    name: "Zendaya",
    month: 9,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Zendaya_-_2019_by_Glenn_Francis.jpg/500px-Zendaya_-_2019_by_Glenn_Francis.jpg",
    bio: "American actress and singer. She began her career as a child model and backup dancer, before gaining prominence for her role as Rocky Blue on the Disney Channel series Shake It Up. Known for her roles in Euphoria and Spider-Man films.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 92,
    name: "Tom Cruise",
    month: 7,
    day: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/500px-Tom_Cruise_by_Gage_Skidmore_2.jpg",
    bio: "American actor and producer. One of the world's highest-paid actors, he has received various accolades including three Golden Globe Awards and nominations for three Academy Awards. Known for performing his own stunts in action films.",
    achievement: "Action Film Star",
  },
  {
    id: 93,
    name: "Lady Gaga",
    month: 3,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lady_Gaga_at_the_2021_GLAAD_Media_Awards_%28cropped%29.jpg/500px-Lady_Gaga_at_the_2021_GLAAD_Media_Awards_%28cropped%29.jpg",
    bio: "American singer, songwriter, and actress. Known for her image reinventions and musical versatility, she has received numerous accolades including 13 Grammy Awards. She has also starred in films like A Star Is Born and House of Gucci.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 94,
    name: "Robert Downey Jr.",
    month: 4,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/500px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
    bio: "American actor. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age.",
    achievement: "Iron Man Star",
  },
  {
    id: 95,
    name: "Ariana Grande",
    month: 6,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_2020_%28cropped%29.jpg/500px-Ariana_Grande_Grammys_2020_%28cropped%29.jpg",
    bio: "American singer, songwriter, and actress. She began her career in the Broadway musical 13 before playing Cat Valentine in the Nickelodeon television series Victorious. Known for her four-octave vocal range.",
    achievement: "Multi-Platinum Artist",
  },
  {
    id: 96,
    name: "Chris Hemsworth",
    month: 8,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/500px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg",
    bio: "Australian actor. He rose to prominence playing Kim Hyde in the Australian television series Home and Away before beginning a film career in Hollywood. Best known for playing Thor in the Marvel Cinematic Universe.",
    achievement: "Marvel Superhero",
  },
  {
    id: 97,
    name: "Jennifer Lawrence",
    month: 8,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jennifer_Lawrence_SDCC_2015_X-Men_-_Apocalypse.jpg/500px-Jennifer_Lawrence_SDCC_2015_X-Men_-_Apocalypse.jpg",
    bio: "American actress. She was the world's highest-paid actress in 2015 and 2016, and her films have grossed over $6 billion worldwide. She won the Academy Award for Best Actress for her performance in Silver Linings Playbook.",
    achievement: "Academy Award Winner",
  },
  {
    id: 98,
    name: "Harry Styles",
    month: 2,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Harry_Styles_2021_%28cropped%29.jpg/500px-Harry_Styles_2021_%28cropped%29.jpg",
    bio: "English singer, songwriter, and actor. He gained fame as a member of the boy band One Direction. After the band went on hiatus, he launched a successful solo career and has also pursued acting.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 99,
    name: "Margot Robbie",
    month: 7,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Margot_Robbie_2019_By_Gage_Skidmore.jpg/500px-Margot_Robbie_2019_By_Gage_Skidmore.jpg",
    bio: "Australian actress and producer. She started her career in Australian independent films before breaking out in Hollywood. Known for her roles in The Wolf of Wall Street, I, Tonya, and as Harley Quinn in the DC Extended Universe.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 100,
    name: "Ryan Reynolds",
    month: 10,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/500px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg",
    bio: "Canadian-American actor, producer, and businessman. He began his career starring in the Canadian teen soap opera Hillside, and had minor roles before landing the lead role on the sitcom Two Guys and a Girl.",
    achievement: "Deadpool Star",
  },
  {
    id: 101,
    name: "Florence Pugh",
    month: 1,
    day: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Florence_Pugh_at_the_2024_Toronto_International_Film_Festival_13_%28cropped_2_%E2%80%93_color_adjusted%29.jpg/500px-Florence_Pugh_at_the_2024_Toronto_International_Film_Festival_13_%28cropped_2_%E2%80%93_color_adjusted%29.jpg",
    bio: "English actress. She made her professional acting debut in the drama film The Falling and gained recognition for her role in Lady Macbeth. Known for her roles in Little Women, Midsommar, and Black Widow.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 102,
    name: "Timothée Chalamet",
    month: 12,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_TIFF_2017_%28cropped%29.jpg/500px-Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_TIFF_2017_%28cropped%29.jpg",
    bio: "American actor. He began his career in short films and television, appearing in the drama series Homeland. He gained international recognition for his role in Call Me by Your Name, earning an Academy Award nomination.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 103,
    name: "Billie Eilish",
    month: 12,
    day: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg/500px-BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg",
    bio: "American singer and songwriter. She first gained public attention in 2015 with her debut single 'Ocean Eyes', which was subsequently released by Darkroom and Interscope Records. Known for her distinctive vocal style and genre-blending sound.",
    achievement: "Multiple Grammy Winner",
  },
  {
    id: 104,
    name: "Pedro Pascal",
    month: 4,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pedro_Pascal_by_Gage_Skidmore.jpg/500px-Pedro_Pascal_by_Gage_Skidmore.jpg",
    bio: "Chilean-American actor. He rose to prominence for his roles in television series such as Game of Thrones, Narcos, and The Mandalorian. Known for his versatility in both dramatic and comedic roles.",
    achievement: "Emmy Nominee",
  },
  {
    id: 105,
    name: "Anya Taylor-Joy",
    month: 4,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Anya_Taylor-Joy_%28cropped%29.jpg/500px-Anya_Taylor-Joy_%28cropped%29.jpg",
    bio: "British-American actress. She made her acting debut in the fantasy series Atlantis and had her breakthrough in the horror film The Witch. Known for her roles in The Queen's Gambit and Emma.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 106,
    name: "Austin Butler",
    month: 8,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Austin_Butler_2022.jpg/500px-Austin_Butler_2022.jpg",
    bio: "American actor. He began his career as a background actor and supporting roles on television. He gained recognition for his role as Elvis Presley in the 2022 biopic Elvis, earning a Golden Globe Award and Academy Award nomination.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 107,
    name: "Jenna Ortega",
    month: 9,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Jenna_Ortega_2022_%28cropped%29.jpg/500px-Jenna_Ortega_2022_%28cropped%29.jpg",
    bio: "American actress. She began her career as a child actress, receiving recognition for her role as Young Jane on The CW comedy-drama series Jane the Virgin. Known for her role as Wednesday Addams in the Netflix series Wednesday.",
    achievement: "Rising Actress",
  },
  {
    id: 108,
    name: "Jonathan Majors",
    month: 9,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jonathan_Majors_2021.jpg/500px-Jonathan_Majors_2021.jpg",
    bio: "American actor. He gained recognition for his roles in The Last Black Man in San Francisco, Lovecraft Country, and Creed III. Known for his intense method acting and physical transformations for roles.",
    achievement: "Award-Winning Actor",
  },
  {
    id: 109,
    name: "Rachel Zegler",
    month: 5,
    day: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rachel_Zegler_2021.jpg/500px-Rachel_Zegler_2021.jpg",
    bio: "American actress and singer. She made her film debut as Maria Vasquez in Steven Spielberg's 2021 adaptation of West Side Story, for which she won a Golden Globe Award. Known for her powerful singing voice.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 110,
    name: "Paul Mescal",
    month: 2,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Paul_Mescal_%2849644850867%29_%28cropped%29.jpg/500px-Paul_Mescal_%2849644850867%29_%28cropped%29.jpg",
    bio: "Irish actor. He gained recognition for his breakout role as Connell Waldron in the television miniseries Normal People, for which he received a BAFTA TV Award. Known for his naturalistic acting style.",
    achievement: "BAFTA Winner",
  },
  {
    id: 111,
    name: "Simu Liu",
    month: 4,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Simu_Liu_2022.jpg/500px-Simu_Liu_2022.jpg",
    bio: "Canadian actor, stuntman, and writer. He is known for playing Jung Kim in the CBC Television sitcom Kim's Convenience and Shang-Chi in the Marvel Cinematic Universe film Shang-Chi and the Legend of the Ten Rings.",
    achievement: "Marvel Superhero",
  },
  {
    id: 112,
    name: "Saoirse Ronan",
    month: 4,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Saoirse_Ronan_Berlinale_2018.jpg/500px-Saoirse_Ronan_Berlinale_2018.jpg",
    bio: "Irish and American actress. She has received multiple accolades, including a Golden Globe Award, and nominations for four Academy Awards and five British Academy Film Awards. Known for her period drama roles.",
    achievement: "Four-Time Oscar Nominee",
  },
  {
    id: 113,
    name: "Daniel Kaluuya",
    month: 2,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Daniel_Kaluuya_2018.jpg/500px-Daniel_Kaluuya_2018.jpg",
    bio: "British actor and writer. He began his career as a teenager in improvisational theatre. He gained recognition for his role in Get Out, which earned him an Academy Award nomination, and won an Oscar for Judas and the Black Messiah.",
    achievement: "Academy Award Winner",
  },
  {
    id: 114,
    name: "Florence Welch",
    month: 8,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Florence_Welch_2011_%28cropped%29.jpg/500px-Florence_Welch_2011_%28cropped%29.jpg",
    bio: "English singer and songwriter. She is the lead vocalist and primary songwriter of the indie rock band Florence and the Machine. Known for her powerful dramatic soprano voice and theatrical performances.",
    achievement: "Grammy-Nominated Singer",
  },
  {
    id: 115,
    name: "Donald Glover",
    month: 9,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Donald_Glover_2018.jpg/500px-Donald_Glover_2018.jpg",
    bio: "American actor, comedian, singer, writer, director, and producer. He performs musically under the stage name Childish Gambino. He created and stars in the Amazon Prime Video series Swarm.",
    achievement: "Multi-Talented Artist",
  },
  {
    id: 116,
    name: "Lupita Nyong'o",
    month: 3,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lupita_Nyong%27o_2015_%28cropped%29.jpg/500px-Lupita_Nyong%27o_2015_%28cropped%29.jpg",
    bio: "Mexican-Kenyan actress. She is the recipient of several accolades, including an Academy Award and a Daytime Emmy Award. She had her feature film debut in 12 Years a Slave and is known for her roles in Black Panther and Us.",
    achievement: "Academy Award Winner",
  },
  {
    id: 117,
    name: "John Boyega",
    month: 3,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/John_Boyega_%2849669852763%29_%28cropped%29.jpg/500px-John_Boyega_%2849669852763%29_%28cropped%29.jpg",
    bio: "British actor. He rose to prominence for his role as Finn in the Star Wars sequel trilogy. He began his career with the science fiction comedy film Attack the Block and has since become known for his activism.",
    achievement: "Star Wars Actor",
  },
  {
    id: 118,
    name: "Letitia Wright",
    month: 10,
    day: 31,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Letitia_Wright_%2849669852788%29_%28cropped%29.jpg/500px-Letitia_Wright_%2849669852788%29_%28cropped%29.jpg",
    bio: "Guyanese-British actress. She began her career with guest roles in television series before her breakthrough role in Black Panther. Known for playing Shuri in the Marvel Cinematic Universe.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 119,
    name: "Millie Bobby Brown",
    month: 2,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Millie_Bobby_Brown_2023_%28cropped%29.jpg/500px-Millie_Bobby_Brown_2023_%28cropped%29.jpg",
    bio: "British actress and producer. She gained recognition for playing Eleven in the Netflix science fiction series Stranger Things. She has since starred in the Enola Holmes film series and founded her beauty brand Florence by Mills.",
    achievement: "Young Emmy Nominee",
  },
  {
    id: 120,
    name: "Tom Holland",
    month: 6,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/500px-Tom_Holland_by_Gage_Skidmore.jpg",
    bio: "English actor. His accolades include a British Academy Film Award and three Saturn Awards. He gained recognition for playing Spider-Man in the Marvel Cinematic Universe and has also starred in stage productions.",
    achievement: "Spider-Man Star",
  },
  {
    id: 121,
    name: "Bad Bunny",
    month: 3,
    day: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bad_Bunny_performing_in_2022.png/500px-Bad_Bunny_performing_in_2022.png",
    bio: "Puerto Rican rapper, singer, and songwriter. His music is often defined as Latin trap and reggaeton, but he has incorporated various other genres into his music. He is one of the most streamed artists globally on Spotify.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 122,
    name: "Olivia Rodrigo",
    month: 2,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Olivia_Rodrigo_2021_American_Music_Awards_%28cropped%29.png/500px-Olivia_Rodrigo_2021_American_Music_Awards_%28cropped%29.png",
    bio: "American singer-songwriter and actress. She gained fame with her debut single 'Drivers License', which broke various records and became one of the best-selling songs of 2021. She started her career as a child actress on Disney series.",
    achievement: "Multiple Grammy Winner",
  },
  {
    id: 123,
    name: "The Weeknd",
    month: 2,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Weeknd_2018.png/500px-The_Weeknd_2018.png",
    bio: "Canadian singer, songwriter, and record producer. Known for his versatile singing voice and eccentric music style, he has won numerous awards including four Grammy Awards. His album 'After Hours' broke multiple streaming records.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 124,
    name: "Doja Cat",
    month: 10,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Doja_Cat_2021_American_Music_Awards_%28cropped%29.png/500px-Doja_Cat_2021_American_Music_Awards_%28cropped%29.png",
    bio: "American rapper, singer, and songwriter. She gained recognition through social media platform TikTok and is known for her viral songs and versatile musical style that incorporates pop, R&B, and hip hop elements.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 125,
    name: "BTS",
    month: 6,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/BTS_performing_at_the_White_House%2C_31_May_2022.jpg/500px-BTS_performing_at_the_White_House%2C_31_May_2022.jpg",
    bio: "South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook. They are recognized for their diverse music style and meaningful lyrics, becoming global cultural icons.",
    achievement: "Global Music Icons",
  },
  {
    id: 126,
    name: "Lionel Messi",
    month: 6,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/500px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    bio: "Argentine professional footballer who plays as a forward for Inter Miami and captains the Argentina national team. Widely regarded as one of the greatest players of all time, he has won a record eight Ballon d'Or awards.",
    achievement: "World Cup Champion",
  },
  {
    id: 127,
    name: "Cristiano Ronaldo",
    month: 2,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/500px-Cristiano_Ronaldo_2018.jpg",
    bio: "Portuguese professional footballer who plays as a forward for Al Nassr and captains the Portugal national team. He is considered one of the greatest players of all time and has won five Ballon d'Or awards.",
    achievement: "Five-Time Ballon d'Or Winner",
  },
  {
    id: 128,
    name: "LeBron James",
    month: 12,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped%29.jpg/500px-LeBron_James_%2851959977144%29_%28cropped%29.jpg",
    bio: "American professional basketball player for the Los Angeles Lakers. Widely considered one of the greatest basketball players of all time, he has won four NBA championships and four MVP Awards.",
    achievement: "Four-Time NBA Champion",
  },
  {
    id: 129,
    name: "Serena Williams",
    month: 9,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Serena_Williams_at_2013_US_Open.jpg/500px-Serena_Williams_at_2013_US_Open.jpg",
    bio: "American former professional tennis player. Considered among the greatest tennis players of all time, she was ranked world No. 1 in singles by the Women's Tennis Association for 319 weeks.",
    achievement: "23-Time Grand Slam Champion",
  },
  {
    id: 130,
    name: "Roger Federer",
    month: 8,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Roger_Federer_2012_Indian_Wells.jpg/500px-Roger_Federer_2012_Indian_Wells.jpg",
    bio: "Swiss former professional tennis player. He was ranked world No. 1 by the Association of Tennis Professionals for 310 weeks, including a record 237 consecutive weeks, and won 20 Grand Slam men's singles titles.",
    achievement: "20-Time Grand Slam Champion",
  },
  {
    id: 131,
    name: "Usain Bolt",
    month: 8,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Usain_Bolt_after_4_x_100_m_relay_final_Rio_2016.jpg/500px-Usain_Bolt_after_4_x_100_m_relay_final_Rio_2016.jpg",
    bio: "Jamaican retired sprinter, widely considered to be the greatest sprinter of all time. He is the world record holder in the 100 metres, 200 metres, and 4 × 100 metres relay.",
    achievement: "Eight-Time Olympic Gold Medalist",
  },
  {
    id: 132,
    name: "Michael Phelps",
    month: 6,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Michael_Phelps_Rio_Olympics_2016.jpg/500px-Michael_Phelps_Rio_Olympics_2016.jpg",
    bio: "American former competitive swimmer. He is the most successful and most decorated Olympian of all time, with a total of 28 medals. Phelps also holds the all-time records for Olympic gold medals.",
    achievement: "28-Time Olympic Medalist",
  },
  {
    id: 133,
    name: "Simone Biles",
    month: 3,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Simone_Biles_2016_All-Around_2_%28cropped%29.jpg/500px-Simone_Biles_2016_All-Around_2_%28cropped%29.jpg",
    bio: "American artistic gymnast. Her seven Olympic medals tied with Shannon Miller for the most Olympic medals won by an American gymnast. She is considered one of the greatest gymnasts of all time.",
    achievement: "Seven-Time Olympic Medalist",
  },
  {
    id: 134,
    name: "Naomi Osaka",
    month: 10,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Naomi_Osaka_%2849213937021%29_%28cropped%29.jpg/500px-Naomi_Osaka_%2849213937021%29_%28cropped%29.jpg",
    bio: "Japanese professional tennis player. She has been ranked world No. 1 by the Women's Tennis Association and is the first Asian player to hold the top ranking in singles. She is a four-time Grand Slam singles champion.",
    achievement: "Four-Time Grand Slam Champion",
  },
  {
    id: 135,
    name: "Stephen Curry",
    month: 3,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Stephen_Curry_Shooting_%28cropped%29.jpg/500px-Stephen_Curry_Shooting_%28cropped%29.jpg",
    bio: "American professional basketball player for the Golden State Warriors. Widely regarded as the greatest shooter in NBA history, he is credited with revolutionizing the game by inspiring teams to utilize the three-point shot.",
    achievement: "Four-Time NBA Champion",
  },
  {
    id: 136,
    name: "Megan Rapinoe",
    month: 7,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Megan_Rapinoe_2019.jpg/500px-Megan_Rapinoe_2019.jpg",
    bio: "American professional soccer player who plays as a winger. She captains OL Reign of the National Women's Soccer League and the United States national team. She is known for her activism and advocacy work.",
    achievement: "World Cup Champion",
  },
  {
    id: 137,
    name: "Novak Djokovic",
    month: 5,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Novak_Djokovic_Trophy_Wimbledon_2022.jpg/500px-Novak_Djokovic_Trophy_Wimbledon_2022.jpg",
    bio: "Serbian professional tennis player. He has been ranked world No. 1 for a record total number of weeks and has finished as year-end No. 1 a record eight times. He has won 24 Grand Slam men's singles titles.",
    achievement: "24-Time Grand Slam Champion",
  },
  {
    id: 138,
    name: "Kylian Mbappé",
    month: 12,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Picture_with_Mbapp%C3%A9_%28cropped%29.jpg/500px-Picture_with_Mbapp%C3%A9_%28cropped%29.jpg",
    bio: "French professional footballer who plays as a forward for Paris Saint-Germain and captains the France national team. Regarded as one of the best players in the world, he is known for his exceptional speed and finishing.",
    achievement: "World Cup Champion",
  },
  {
    id: 139,
    name: "Shawn Mendes",
    month: 8,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Shawn_Mendes_%28cropped%29.jpg/500px-Shawn_Mendes_%28cropped%29.jpg",
    bio: "Canadian singer-songwriter. He gained a following in 2013, when he posted song covers on the video sharing application Vine. He has since released multiple studio albums and received several awards.",
    achievement: "Grammy Nominee",
  },
  {
    id: 140,
    name: "Camila Cabello",
    month: 3,
    day: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Camila_Cabello_2018_%28cropped%29.jpg/500px-Camila_Cabello_2018_%28cropped%29.jpg",
    bio: "Cuban-American singer and songwriter. She rose to prominence as a member of the girl group Fifth Harmony. After leaving the group, she released her debut studio album 'Camila', which included the hit single 'Havana'.",
    achievement: "Grammy Nominee",
  },
  {
    id: 141,
    name: "Post Malone",
    month: 7,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Post_Malone_2018_%28cropped%29.jpg/500px-Post_Malone_2018_%28cropped%29.jpg",
    bio: "American rapper, singer, songwriter, and record producer. Known for his introspective songwriting and variegated vocals, he has gained recognition for blending various genres including hip hop, pop, and rock.",
    achievement: "Multi-Platinum Artist",
  },
  {
    id: 142,
    name: "Khalid",
    month: 2,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Khalid_%2848830964167%29_%28cropped%29.jpg/500px-Khalid_%2848830964167%29_%28cropped%29.jpg",
    bio: "American singer and songwriter. He rose to fame after the release of his debut single 'Location' in 2016. His music has been described as a mix of R&B, pop, and soul, with his vocals being characterized as a tenor range.",
    achievement: "Grammy Nominee",
  },
  {
    id: 143,
    name: "Halsey",
    month: 9,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Halsey_2019_%28cropped%29.jpg/500px-Halsey_2019_%28cropped%29.jpg",
    bio: "American singer and songwriter. They first gained attention from social media and later achieved success with their debut studio album 'Badlands'. Known for their distinctive voice and personal lyrics.",
    achievement: "Billboard Music Award Winner",
  },
  {
    id: 144,
    name: "Lizzo",
    month: 4,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lizzo_performing_in_2019_%28cropped%29.jpg/500px-Lizzo_performing_in_2019_%28cropped%29.jpg",
    bio: "American singer, rapper, and flutist. Born Melissa Viviane Jefferson, she studied classical music with the flute and began making music in hip hop and R&B groups. She is known for body positivity and self-love anthems.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 145,
    name: "Harry Kane",
    month: 7,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Harry_Kane_2022_%28cropped%29.jpg/500px-Harry_Kane_2022_%28cropped%29.jpg",
    bio: "English professional footballer who plays as a striker for Bayern Munich and captains the England national team. Known for his prolific goalscoring record and ability to link up play, he is regarded as one of the best strikers in the world.",
    achievement: "Premier League Record Holder",
  },
  {
    id: 146,
    name: "Virgil van Dijk",
    month: 7,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Virgil_van_Dijk_2019.jpg/500px-Virgil_van_Dijk_2019.jpg",
    bio: "Dutch professional footballer who plays as a centre-back for Liverpool and captains the Netherlands national team. He is widely regarded as one of the best defenders in the world.",
    achievement: "UEFA Men's Player of the Year",
  },
  {
    id: 147,
    name: "Kevin De Bruyne",
    month: 6,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kevin_De_Bruyne_2021_%28cropped%29.jpg/500px-Kevin_De_Bruyne_2021_%28cropped%29.jpg",
    bio: "Belgian professional footballer who plays as a midfielder for Manchester City and the Belgium national team. He is widely regarded as one of the greatest midfielders of his generation.",
    achievement: "Premier League Champion",
  },
  {
    id: 148,
    name: "Giannis Antetokounmpo",
    month: 12,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Giannis_Antetokounmpo_2021_%28cropped%29.jpg/500px-Giannis_Antetokounmpo_2021_%28cropped%29.jpg",
    bio: "Greek-Nigerian professional basketball player for the Milwaukee Bucks. Nicknamed the 'Greek Freak', he is widely regarded as one of the greatest power forwards and one of the greatest European players of all time.",
    achievement: "NBA Champion & MVP",
  },
  {
    id: 149,
    name: "Nikola Jokić",
    month: 2,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Jamal_Murray%2C_Nikola_Joki%C4%87%2C_and_Michael_Malone_2023_%28cropped%29.jpg/500px-Jamal_Murray%2C_Nikola_Joki%C4%87%2C_and_Michael_Malone_2023_%28cropped%29.jpg",
    bio: "Serbian professional basketball player for the Denver Nuggets. A two-time NBA Most Valuable Player, he is a six-time NBA All-Star and was named to the All-NBA Team on five occasions. Known for his exceptional passing ability.",
    achievement: "NBA Champion & MVP",
  },
  {
    id: 150,
    name: "Luka Dončić",
    month: 2,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Luka_Don%C4%8Di%C4%87_2021_%28cropped%29.jpg/500px-Luka_Don%C4%8Di%C4%87_2021_%28cropped%29.jpg",
    bio: "Slovenian professional basketball player for the Dallas Mavericks. He was the 2018 EuroLeague MVP and the 2019 NBA Rookie of the Year. He is a four-time NBA All-Star and has been named to the All-NBA First Team four times.",
    achievement: "NBA All-Star",
  },
  {
    id: 151,
    name: "Dua Lipa",
    month: 8,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dua_Lipa_2018_%28cropped%29.jpg/500px-Dua_Lipa_2018_%28cropped%29.jpg",
    bio: "British and Albanian singer and songwriter. Her musical style is primarily pop with influences from dance, disco, and R&B. She has won numerous awards including three Grammy Awards and six Brit Awards.",
    achievement: "Three-Time Grammy Winner",
  },
  {
    id: 152,
    name: "Ed Sheeran",
    month: 2,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ed_Sheeran-6998_%28cropped%29.jpg/500px-Ed_Sheeran-6998_%28cropped%29.jpg",
    bio: "English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. He is one of the world's best-selling music artists.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 153,
    name: "Bruno Mars",
    month: 10,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bruno_Mars_at_the_Grammys_in_2018.jpg/500px-Bruno_Mars_at_the_Grammys_in_2018.jpg",
    bio: "American singer, songwriter, and record producer. He is known for his stage performances, retro showmanship, and for performing in a wide range of musical styles, including pop, R&B, funk, soul, reggae, and rock.",
    achievement: "11-Time Grammy Winner",
  },
  {
    id: 154,
    name: "Katy Perry",
    month: 10,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Katy_Perry_2018.jpg/500px-Katy_Perry_2018.jpg",
    bio: "American singer, songwriter, and television personality. She is known for her influence on modern pop music and her camp style, having been referred to as the 'Queen of Camp' by Rolling Stone.",
    achievement: "Billboard Chart Record Holder",
  },
  {
    id: 155,
    name: "Shakira",
    month: 2,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Shakira_2014_%28cropped%29.jpg/500px-Shakira_2014_%28cropped%29.jpg",
    bio: "Colombian singer and songwriter. Born and raised in Barranquilla, she has been referred to as the 'Queen of Latin Music' and is noted for her musical versatility. She is one of the best-selling Latin music artists.",
    achievement: "Latin Grammy Winner",
  },
  {
    id: 156,
    name: "Ricky Martin",
    month: 12,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ricky_Martin_2018_%28cropped%29.jpg/500px-Ricky_Martin_2018_%28cropped%29.jpg",
    bio: "Puerto Rican singer, actor, and author. He is known for his musical versatility, with his discography spanning Latin pop, dance, reggaeton, and salsa genres. He is often called the 'King of Latin Pop'.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 157,
    name: "Jennifer Lopez",
    month: 7,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jennifer_Lopez_at_2018_MTV_Movie_Awards_%28cropped%29.jpg/500px-Jennifer_Lopez_at_2018_MTV_Movie_Awards_%28cropped%29.jpg",
    bio: "American actress, singer, and dancer. Often considered a Latin pop culture icon, she is one of the most influential Hispanic entertainers in North America. She gained her first leading role in the 1997 film Selena.",
    achievement: "Multi-Talented Entertainer",
  },
  {
    id: 158,
    name: "Will Smith",
    month: 9,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Will_Smith_2019.jpg/500px-Will_Smith_2019.jpg",
    bio: "American actor, rapper, and film producer. He has received multiple accolades, including an Academy Award, a BAFTA Award, and four Grammy Awards. As a rapper, he achieved substantial success.",
    achievement: "Academy Award Winner",
  },
  {
    id: 159,
    name: "Angelina Jolie",
    month: 6,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Angelina_Jolie_at_G20_Summit_2021_%28cropped%29.jpg/500px-Angelina_Jolie_at_G20_Summit_2021_%28cropped%29.jpg",
    bio: "American actress, filmmaker, and humanitarian. She has received an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards. She is known for her humanitarian work with refugees.",
    achievement: "Academy Award Winner",
  },
  {
    id: 160,
    name: "Brad Pitt",
    month: 12,
    day: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/500px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
    bio: "American actor and film producer. He is the recipient of various accolades, including an Academy Award, a British Academy Film Award, and two Golden Globe Awards for his acting.",
    achievement: "Academy Award Winner",
  },
  {
    id: 161,
    name: "George Clooney",
    month: 5,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/500px-George_Clooney_2016.jpg",
    bio: "American actor and filmmaker. He is the recipient of numerous accolades, including two Academy Awards and four Golden Globe Awards. He is also known for his political activism and humanitarian work.",
    achievement: "Academy Award Winner",
  },
  {
    id: 162,
    name: "Julia Roberts",
    month: 10,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Julia_Roberts_2011_Shankbone_2_%28cropped%29.JPG/500px-Julia_Roberts_2011_Shankbone_2_%28cropped%29.JPG",
    bio: "American actress. She has received multiple accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. She is known for her leading roles in various film genres.",
    achievement: "Academy Award Winner",
  },
  {
    id: 163,
    name: "Meryl Streep",
    month: 6,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/500px-Meryl_Streep_December_2018.jpg",
    bio: "American actress. Often described as 'the best actress of her generation', Streep is particularly known for her versatility and accent adaptation. She has received numerous accolades throughout her career.",
    achievement: "Three-Time Academy Award Winner",
  },
  {
    id: 164,
    name: "Daniel Day-Lewis",
    month: 4,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Daniel_Day-Lewis_2016.jpg/500px-Daniel_Day-Lewis_2016.jpg",
    bio: "British actor. He is often described as one of the greatest actors in the history of cinema. He is known for his intense method acting style and for frequently remaining in character throughout the shooting of his films.",
    achievement: "Three-Time Academy Award Winner",
  },
  {
    id: 165,
    name: "Denzel Washington",
    month: 12,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Denzel_Washington_2018.jpg/500px-Denzel_Washington_2018.jpg",
    bio: "American actor, producer, and director. He has been described as an actor who reconfigured 'the concept of classic movie stardom'. He has received numerous accolades throughout his career spanning over four decades.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 166,
    name: "Morgan Freeman",
    month: 6,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Morgan_Freeman_Deauville_2018.jpg/500px-Morgan_Freeman_Deauville_2018.jpg",
    bio: "American actor, producer, and narrator. He is known for his distinctive deep voice and various roles in a wide variety of film genres. Throughout his career spanning over five decades, he has received numerous accolades.",
    achievement: "Academy Award Winner",
  },
  {
    id: 167,
    name: "Samuel L. Jackson",
    month: 12,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/500px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg",
    bio: "American actor and producer. One of the most widely recognized actors of his generation, the films in which he has appeared have collectively grossed over $27 billion worldwide, making him the highest-grossing actor of all time.",
    achievement: "Highest-Grossing Actor",
  },
  {
    id: 168,
    name: "Robert De Niro",
    month: 8,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Robert_De_Niro_Cannes_2016.jpg/500px-Robert_De_Niro_Cannes_2016.jpg",
    bio: "American actor and film producer. He is particularly known for his nine collaborations with filmmaker Martin Scorsese. He is the recipient of various accolades, including two Academy Awards.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 169,
    name: "Al Pacino",
    month: 4,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Al_Pacino.jpg/500px-Al_Pacino.jpg",
    bio: "American actor and filmmaker. He is considered one of the most influential actors of the 20th century. He is the recipient of numerous accolades, including an Academy Award, two Tony Awards, and two Primetime Emmy Awards.",
    achievement: "Academy Award Winner",
  },
  {
    id: 170,
    name: "Jack Nicholson",
    month: 4,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jack_Nicholson_2004.jpg/500px-Jack_Nicholson_2004.jpg",
    bio: "American retired actor and filmmaker. He is widely regarded as one of the greatest actors of all time. He has received numerous accolades throughout his career, including three Academy Awards.",
    achievement: "Three-Time Academy Award Winner",
  },
  {
    id: 171,
    name: "Maggie Smith",
    month: 12,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Maggie_Smith_1976_%28cropped%29.jpg/500px-Maggie_Smith_1976_%28cropped%29.jpg",
    bio: "English actress. She has had an extensive career on stage, film, and television which began in the mid-1950s. She has received numerous accolades, including two Academy Awards and four BAFTA Awards.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 172,
    name: "Helen Mirren",
    month: 7,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Helen_Mirren_2015_%28cropped%29.jpg/500px-Helen_Mirren_2015_%28cropped%29.jpg",
    bio: "English actor. She is the only performer to have achieved both the American and the British Triple Crown of Acting. Mirren has received numerous accolades for her acting throughout her career.",
    achievement: "Academy Award Winner",
  },
  {
    id: 173,
    name: "Judi Dench",
    month: 12,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Judi_Dench_2014.jpg/500px-Judi_Dench_2014.jpg",
    bio: "English actress. She has performed in many films and is also known for her work in various roles in the Royal Shakespeare Company. She has received numerous accolades throughout her career spanning six decades.",
    achievement: "Academy Award Winner",
  },
  {
    id: 174,
    name: "Anthony Hopkins",
    month: 12,
    day: 31,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Anthony_Hopkins_2016.jpg/500px-Anthony_Hopkins_2016.jpg",
    bio: "Welsh actor, director, and producer. One of Britain's most recognizable actors, he is known for his performances on the screen and stage. He has received many awards and nominations throughout his career.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 175,
    name: "Ian McKellen",
    month: 5,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Ian_McKellen_2015_%28cropped%29.jpg/500px-Sir_Ian_McKellen_2015_%28cropped%29.jpg",
    bio: "English actor. His career spans seven decades, having performed in various genres from Shakespearean and modern theatre to popular fantasy and science fiction. He is known for his roles in The Lord of the Rings and X-Men.",
    achievement: "Six-Time Olivier Award Winner",
  },
  {
    id: 176,
    name: "Patrick Stewart",
    month: 7,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Patrick_Stewart_2013_%28cropped%29.jpg/500px-Patrick_Stewart_2013_%28cropped%29.jpg",
    bio: "English actor whose career has included roles on stage, television, and film. He is known for his roles as Captain Jean-Luc Picard in Star Trek and Professor Charles Xavier in the X-Men film series.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 177,
    name: "Sean Connery",
    month: 8,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Sean_Connery_%281983%29.jpg/500px-Sean_Connery_%281983%29.jpg",
    bio: "Scottish actor. He was the first actor to portray fictional British secret agent James Bond on film, starring in seven Bond films between 1962 and 1983. He won an Academy Award, two BAFTA Awards and three Golden Globes.",
    achievement: "Academy Award Winner",
  },
  {
    id: 178,
    name: "Roger Moore",
    month: 10,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roger_Moore_1973.jpg/500px-Roger_Moore_1973.jpg",
    bio: "English actor. He was the third actor to portray fictional British secret agent James Bond, starring in seven feature films from 1973 to 1985. He also had roles in television and other film roles.",
    achievement: "James Bond Actor",
  },
  {
    id: 179,
    name: "Pierce Brosnan",
    month: 5,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pierce_Brosnan_2014.jpg/500px-Pierce_Brosnan_2014.jpg",
    bio: "Irish actor and film producer. He is best known as the fifth actor to play secret agent James Bond in the Bond film series, starring in four films from 1995 to 2002. He is also known for his environmental activism.",
    achievement: "James Bond Actor",
  },
  {
    id: 180,
    name: "Daniel Craig",
    month: 3,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Daniel_Craig_-_Logan_Lucky_Premiere_-_GMA_%2838191444221%29_%28cropped%29.jpg/500px-Daniel_Craig_-_Logan_Lucky_Premiere_-_GMA_%2838191444221%29_%28cropped%29.jpg",
    bio: "English actor. He is best known for playing James Bond in five films in the series, from Casino Royale to No Time to Die. He has received various accolades, including a BAFTA Award.",
    achievement: "James Bond Actor",
  },

  {
    id: 181,
    name: "Keanu Reeves",
    month: 9,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Keanu_Reeves_2019.jpg/500px-Keanu_Reeves_2019.jpg",
    bio: "Canadian actor. He gained fame for his starring role performances in several blockbuster films, including comedies, dramas, and science fiction. He is known for his roles in The Matrix series and John Wick series.",
    achievement: "Action Film Star",
  },
  {
    id: 182,
    name: "Sandra Bullock",
    month: 7,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sandra_Bullock_2013.jpg/500px-Sandra_Bullock_2013.jpg",
    bio: "American actress and producer. She was the world's highest-paid actress in 2010 and 2014. She has received multiple accolades, including an Academy Award and a Golden Globe Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 183,
    name: "Tom Hanks",
    month: 7,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tom_Hanks_2014.jpg/500px-Tom_Hanks_2014.jpg",
    bio: "American actor and filmmaker. Known for both his comedic and dramatic roles, he is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 184,
    name: "Nicole Kidman",
    month: 6,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Nicole_Kidman_2019_%28cropped%29.jpg/500px-Nicole_Kidman_2019_%28cropped%29.jpg",
    bio: "Australian actress and producer. She has received numerous accolades, including an Academy Award, two Primetime Emmy Awards, and six Golden Globe Awards. She is one of the highest-paid actresses in the world.",
    achievement: "Academy Award Winner",
  },
  {
    id: 185,
    name: "Hugh Jackman",
    month: 10,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hugh_Jackman_2011.jpg/500px-Hugh_Jackman_2011.jpg",
    bio: "Australian actor, singer, and producer. He is best known for playing Wolverine in the X-Men film series from 2000 to 2018, a role for which he holds the Guinness World Record for longest career as a live-action Marvel superhero.",
    achievement: "Tony Award Winner",
  },
  {
    id: 186,
    name: "Cate Blanchett",
    month: 5,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cate_Blanchett_Cannes_2018_2.jpg/500px-Cate_Blanchett_Cannes_2018_2.jpg",
    bio: "Australian actress and producer. Regarded as one of the finest performers of her generation, she is known for her versatile work across independent films, blockbusters, and stage productions.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 187,
    name: "Matt Damon",
    month: 10,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Matt_Damon_TIFF_2015.jpg/500px-Matt_Damon_TIFF_2015.jpg",
    bio: "American actor, film producer, and screenwriter. Ranked among Forbes' most bankable stars, he is one of the highest-grossing actors of all time. He is known for his roles in the Jason Bourne series and Good Will Hunting.",
    achievement: "Academy Award Winner",
  },
  {
    id: 188,
    name: "Ben Affleck",
    month: 8,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ben_Affleck_by_Gage_Skidmore_3.jpg/500px-Ben_Affleck_by_Gage_Skidmore_3.jpg",
    bio: "American actor, film director, producer, and screenwriter. His accolades include two Academy Awards and three Golden Globe Awards. He began his career as a child actor and gained fame after co-writing and starring in Good Will Hunting.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 189,
    name: "Charlize Theron",
    month: 8,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charlize_Theron_2019_%28cropped%29.jpg/500px-Charlize_Theron_2019_%28cropped%29.jpg",
    bio: "South African and American actress and producer. One of the world's highest-paid actresses, she is the recipient of numerous accolades, including an Academy Award and a Golden Globe Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 190,
    name: "Natalie Portman",
    month: 6,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Natalie_Portman_2019_%28cropped%29.jpg/500px-Natalie_Portman_2019_%28cropped%29.jpg",
    bio: "American actress and filmmaker. She has received various accolades, including an Academy Award and two Golden Globe Awards. She began modeling as a child and made her film debut in Léon: The Professional.",
    achievement: "Academy Award Winner",
  },
  {
    id: 191,
    name: "Joaquin Phoenix",
    month: 10,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Joaquin_Phoenix_by_Gage_Skidmore_2019_%28cropped%29.jpg/500px-Joaquin_Phoenix_by_Gage_Skidmore_2019_%28cropped%29.jpg",
    bio: "American actor and animal rights activist. Known for playing dark and unconventional characters in independent films, he has received various accolades, including an Academy Award, a Grammy Award, and two Golden Globe Awards.",
    achievement: "Academy Award Winner",
  },
  //   {
  //     id: 192,
  //     name: "Leonardo DiCaprio",
  //     month: 11,
  //     day: 11,
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/500px-Leonardo_DiCaprio_2014.jpg",
  //     bio: "American actor and film producer. Known for his work in biographical and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards.",
  //     achievement: "Academy Award Winner",
  //   },
  {
    id: 193,
    name: "Johnny Depp",
    month: 6,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Johnny_Depp_2020.jpg/500px-Johnny_Depp_2020.jpg",
    bio: "American actor and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, and has been nominated for three Academy Awards.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 194,
    name: "Christian Bale",
    month: 1,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Christian_Bale_2014_%28cropped%29.jpg/500px-Christian_Bale_2014_%28cropped%29.jpg",
    bio: "English actor. Known for his intense method acting and physical transformations for roles, he has been a leading man in films of several genres. He has received various accolades, including an Academy Award and two Golden Globe Awards.",
    achievement: "Academy Award Winner",
  },
  {
    id: 195,
    name: "Russell Crowe",
    month: 4,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Russell_Crowe_2020_%28cropped%29.jpg/500px-Russell_Crowe_2020_%28cropped%29.jpg",
    bio: "New Zealand actor. He began his acting career in Australian television before gaining international recognition for his role in the 1992 film Romper Stomper. He is known for his intense method acting style.",
    achievement: "Academy Award Winner",
  },
  {
    id: 196,
    name: "Sean Penn",
    month: 8,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sean_Penn_2015.jpg/500px-Sean_Penn_2015.jpg",
    bio: "American actor, director, and screenwriter. He is known for his portrayals of brash and unconventional characters. He has received numerous accolades, including two Academy Awards and a Golden Globe Award.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 197,
    name: "Philip Seymour Hoffman",
    month: 7,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Philip_Seymour_Hoffman_2011.jpg/500px-Philip_Seymour_Hoffman_2011.jpg",
    bio: "American actor. Known for his distinctive supporting and character roles, he was the recipient of numerous accolades including an Academy Award, a BAFTA Award, and three Screen Actors Guild Awards.",
    achievement: "Academy Award Winner",
  },
  {
    id: 198,
    name: "Heath Ledger",
    month: 4,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Heath_Ledger_%282%29.jpg/500px-Heath_Ledger_%282%29.jpg",
    bio: "Australian actor and music video director. After playing roles in several Australian television and film productions during the 1990s, he moved to the United States in 1998 to further develop his film career.",
    achievement: "Academy Award Winner",
  },
  {
    id: 199,
    name: "Jared Leto",
    month: 12,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jared_Leto_2018_%28cropped%29.jpg/500px-Jared_Leto_2018_%28cropped%29.jpg",
    bio: "American actor and musician. After starting his career with television appearances in the early 1990s, he achieved recognition for his role as Jordan Catalano on the television series My So-Called Life.",
    achievement: "Academy Award Winner",
  },
  {
    id: 200,
    name: "Mahershala Ali",
    month: 2,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mahershala_Ali_by_Gage_Skidmore.jpg/500px-Mahershala_Ali_by_Gage_Skidmore.jpg",
    bio: "American actor. He has received multiple accolades, including two Academy Awards, a BAFTA Award, three Screen Actors Guild Awards, and two Golden Globe Awards. He is the first Muslim actor to win an Academy Award.",
    achievement: "Two-Time Academy Award Winner",
  },
  {
    id: 201,
    name: "Rami Malek",
    month: 5,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Rami_Malek_2019_%28cropped%29.jpg/500px-Rami_Malek_2019_%28cropped%29.jpg",
    bio: "American actor. He is known for his lead role as Elliot Alderson in the USA Network television series Mr. Robot, for which he received several accolades, including the Primetime Emmy Award for Outstanding Lead Actor.",
    achievement: "Academy Award Winner",
  },
  {
    id: 202,
    name: "Jamie Foxx",
    month: 12,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jamie_Foxx_2019_%28cropped%29.jpg/500px-Jamie_Foxx_2019_%28cropped%29.jpg",
    bio: "American actor, singer, and comedian. He became widely known for his comedy sketch series In Living Color. He has received numerous accolades, including an Academy Award, a BAFTA Award, and a Golden Globe Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 203,
    name: "Forest Whitaker",
    month: 7,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Forest_Whitaker_2016_%28cropped%29.jpg/500px-Forest_Whitaker_2016_%28cropped%29.jpg",
    bio: "American actor, producer, and director. He is the recipient of various accolades, including an Academy Award, a Golden Globe Award, a BAFTA Award, and two Screen Actors Guild Awards.",
    achievement: "Academy Award Winner",
  },
  {
    id: 204,
    name: "Octavia Spencer",
    month: 5,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Octavia_Spencer_2013.jpg/500px-Octavia_Spencer_2013.jpg",
    bio: "American actress and author. She has received various accolades, including an Academy Award, a British Academy Film Award, a Golden Globe Award, and three Screen Actors Guild Awards.",
    achievement: "Academy Award Winner",
  },
  {
    id: 205,
    name: "Viola Davis",
    month: 8,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Viola_Davis_2018.jpg/500px-Viola_Davis_2018.jpg",
    bio: "American actress and producer. The recipient of numerous accolades, she is the first African-American to achieve the Triple Crown of Acting. She is one of the few performers to have won an Academy Award, an Emmy Award, and a Tony Award.",
    achievement: "Triple Crown of Acting",
  },
  {
    id: 206,
    name: "Lupita Nyong'o",
    month: 3,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lupita_Nyong%27o_2015_%28cropped%29.jpg/500px-Lupita_Nyong%27o_2015_%28cropped%29.jpg",
    bio: "Mexican-Kenyan actress. She is the recipient of several accolades, including an Academy Award and a Daytime Emmy Award. She had her feature film debut in 12 Years a Slave and is known for her roles in Black Panther and Us.",
    achievement: "Academy Award Winner",
  },
  {
    id: 207,
    name: "Regina King",
    month: 1,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Regina_King_2019_%28cropped%29.jpg/500px-Regina_King_2019_%28cropped%29.jpg",
    bio: "American actress and director. She has received various accolades, including an Academy Award, a Golden Globe Award, and four Primetime Emmy Awards. She began her career in the television series 227.",
    achievement: "Academy Award Winner",
  },
  {
    id: 208,
    name: "Catherine Zeta-Jones",
    month: 9,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Catherine_Zeta-Jones_2019_%28cropped%29.jpg/500px-Catherine_Zeta-Jones_2019_%28cropped%29.jpg",
    bio: "Welsh actress. Known for her roles in Hollywood films, she began her career on stage at an early age. She has received various accolades, including an Academy Award, a BAFTA Award, and a Tony Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 209,
    name: "Penélope Cruz",
    month: 4,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Penelope_Cruz_2018_%28cropped%29.jpg/500px-Penelope_Cruz_2018_%28cropped%29.jpg",
    bio: "Spanish actress and model. Signed by an agent at age 15, she made her acting debut at 16 on television and her feature film debut the following year in Jamón Jamón. She is known for her roles in Spanish and English-language films.",
    achievement: "Academy Award Winner",
  },
  {
    id: 210,
    name: "Marion Cotillard",
    month: 9,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Marion_Cotillard_2014_%28cropped%29.jpg/500px-Marion_Cotillard_2014_%28cropped%29.jpg",
    bio: "French actress and environmental activist. She is known for her roles in independent films and blockbusters in both European and Hollywood productions. She has received various accolades, including an Academy Award.",
    achievement: "Academy Award Winner",
  },

  {
    id: 211,
    name: "Benedict Cumberbatch",
    month: 7,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Benedict_Cumberbatch_%2848462165301%29_%28cropped%29.jpg/500px-Benedict_Cumberbatch_%2848462165301%29_%28cropped%29.jpg",
    bio: "English actor. Known for his roles on the screen and stage, he has received various accolades, including a BAFTA Award, a Primetime Emmy Award, and a Laurence Olivier Award. He is best known for playing Sherlock Holmes and Doctor Strange.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 212,
    name: "Michael B. Jordan",
    month: 2,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Michael_B._Jordan_2018.jpg/500px-Michael_B._Jordan_2018.jpg",
    bio: "American actor and producer. He is known for his film roles including shooting victim Oscar Grant in Fruitvale Station, boxer Adonis Creed in Creed, and Erik Killmonger in Black Panther. He has received several accolades and nominations.",
    achievement: "NAACP Image Award Winner",
  },
  {
    id: 213,
    name: "Chris Evans",
    month: 6,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chris_Evans_2020_%28cropped%29.jpg/500px-Chris_Evans_2020_%28cropped%29.jpg",
    bio: "American actor. He began his career with roles in television series such as Opposite Sex. He gained wider recognition for his portrayal of the Marvel Comics character Captain America in the Marvel Cinematic Universe.",
    achievement: "People's Choice Award Winner",
  },
  {
    id: 214,
    name: "Chris Pratt",
    month: 6,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Pratt_2018_%28cropped%29.jpg/500px-Chris_Pratt_2018_%28cropped%29.jpg",
    bio: "American actor. He rose to prominence for playing Andy Dwyer in the NBC sitcom Parks and Recreation. He gained international fame for playing Star-Lord in the Marvel Cinematic Universe and Owen Grady in the Jurassic World franchise.",
    achievement: "MTV Movie Award Winner",
  },
  {
    id: 215,
    name: "Scarlett Johansson",
    month: 11,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/500px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg",
    bio: "American actress. The world's highest-paid actress in 2018 and 2019, she has made multiple appearances in the Forbes Celebrity 100. Her films have grossed over $14.3 billion worldwide, making her the highest-grossing box office star of all time.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 216,
    name: "Emma Stone",
    month: 11,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Emma_Stone_2018_%28cropped%29.jpg/500px-Emma_Stone_2018_%28cropped%29.jpg",
    bio: "American actress and producer. She is the recipient of various accolades, including an Academy Award, a British Academy Film Award, and a Golden Globe Award. She was the world's highest-paid actress in 2017.",
    achievement: "Academy Award Winner",
  },
  {
    id: 217,
    name: "Anne Hathaway",
    month: 11,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Anne_Hathaway_2019_%28cropped%29.jpg/500px-Anne_Hathaway_2019_%28cropped%29.jpg",
    bio: "American actress. Her accolades include an Academy Award, a Golden Globe Award, a British Academy Film Award, and a Primetime Emmy Award. She was one of the highest-paid actresses in the world in 2015.",
    achievement: "Academy Award Winner",
  },
  {
    id: 218,
    name: "Amy Adams",
    month: 8,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Amy_Adams_2016_%28cropped%29.jpg/500px-Amy_Adams_2016_%28cropped%29.jpg",
    bio: "American actress. Known for both comedic and dramatic roles, she has been featured three times in annual rankings of the world's highest-paid actresses. She has received two Golden Globe Awards and nominations for six Academy Awards.",
    achievement: "Six-Time Oscar Nominee",
  },
  {
    id: 219,
    name: "Jessica Chastain",
    month: 3,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Jessica_Chastain_2019_%28cropped%29.jpg/500px-Jessica_Chastain_2019_%28cropped%29.jpg",
    bio: "American actress and producer. She is known for her roles in projects that often explore social issues, and for her portrayals of real-life women. She has received various accolades, including an Academy Award and a Golden Globe Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 220,
    name: "Emily Blunt",
    month: 2,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Emily_Blunt_2018_%28cropped%29.jpg/500px-Emily_Blunt_2018_%28cropped%29.jpg",
    bio: "British actress. Her accolades include a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for two British Academy Film Awards. She is one of the highest-paid actresses in the world.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 221,
    name: "Gal Gadot",
    month: 4,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gal_Gadot_2018_%28cropped%29.jpg/500px-Gal_Gadot_2018_%28cropped%29.jpg",
    bio: "Israeli actress and model. She was crowned Miss Israel in 2004. She then served in the Israel Defense Forces for two years, after which she began studying at IDC Herzliya while building her modeling and acting careers.",
    achievement: "Wonder Woman Actress",
  },
  {
    id: 222,
    name: "Henry Cavill",
    month: 5,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Henry_Cavill_2021_%28cropped%29.jpg/500px-Henry_Cavill_2021_%28cropped%29.jpg",
    bio: "British actor. He is known for his portrayal of Charles Brandon in Showtime's The Tudors, as well as Superman in the DC Extended Universe, Geralt of Rivia in The Witcher, and Sherlock Holmes in Enola Holmes.",
    achievement: "Superman Actor",
  },
  {
    id: 223,
    name: "Jason Momoa",
    month: 8,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jason_Momoa_2019_%28cropped%29.jpg/500px-Jason_Momoa_2019_%28cropped%29.jpg",
    bio: "American actor, director, and producer. He made his acting debut as Jason Ioane on the North Shore television series. He is known for his roles as Ronon Dex on Stargate Atlantis and Khal Drogo on Game of Thrones.",
    achievement: "Aquaman Actor",
  },
  {
    id: 224,
    name: "Zac Efron",
    month: 10,
    day: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Zac_Efron_2019_%28cropped%29.jpg/500px-Zac_Efron_2019_%28cropped%29.jpg",
    bio: "American actor and singer. He began acting professionally in the early 2000s and rose to prominence in the late 2000s for his leading role as Troy Bolton in the High School Musical series.",
    achievement: "Teen Choice Award Winner",
  },
  {
    id: 225,
    name: "Robert Pattinson",
    month: 5,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Robert_Pattinson_2019_%28cropped%29.jpg/500px-Robert_Pattinson_2019_%28cropped%29.jpg",
    bio: "English actor. He started his acting career by playing Cedric Diggory in Harry Potter and the Goblet of Fire. He gained worldwide recognition for playing Edward Cullen in The Twilight Saga film series.",
    achievement: "Batman Actor",
  },
  {
    id: 226,
    name: "Kristen Stewart",
    month: 4,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kristen_Stewart_2018_%28cropped%29.jpg/500px-Kristen_Stewart_2018_%28cropped%29.jpg",
    bio: "American actress. The world's highest-paid actress in 2012, she has received various accolades, including a BAFTA Award and a César Award, in addition to nominations for an Academy Award and a Golden Globe Award.",
    achievement: "César Award Winner",
  },
  {
    id: 227,
    name: "Jennifer Aniston",
    month: 2,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/JenniferAnistonHWoFFeb2012_%28cropped%29.jpg/500px-JenniferAnistonHWoFFeb2012_%28cropped%29.jpg",
    bio: "American actress and producer. The daughter of actors John Aniston and Nancy Dow, she began working as an actress at an early age with an uncredited role in the 1987 film Mac and Me.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 228,
    name: "Courteney Cox",
    month: 6,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Courteney_Cox_2011_Shankbone_2_%28cropped%29.JPG/500px-Courteney_Cox_2011_Shankbone_2_%28cropped%29.JPG",
    bio: "American actress, director, and producer. She gained international recognition for her starring role as Monica Geller on the NBC sitcom Friends. During the later seasons of the show, she became the highest-paid television actress of all time.",
    achievement: "People's Choice Award Winner",
  },
  {
    id: 229,
    name: "Lisa Kudrow",
    month: 7,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lisa_Kudrow_2013_Shankbone_2_%28cropped%29.JPG/500px-Lisa_Kudrow_2013_Shankbone_2_%28cropped%29.JPG",
    bio: "American actress, writer, and producer. She is best known for her role as Phoebe Buffay on the NBC sitcom Friends, which aired from 1994 to 2004. She has received various awards and nominations for her work.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 230,
    name: "David Schwimmer",
    month: 11,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_Schwimmer_2011_Shankbone_2_%28cropped%29.JPG/500px-David_Schwimmer_2011_Shankbone_2_%28cropped%29.JPG",
    bio: "American actor and director. He gained worldwide recognition for playing Ross Geller in the sitcom Friends, for which he received a Primetime Emmy Award nomination for Outstanding Supporting Actor in a Comedy Series in 1995.",
    achievement: "Emmy Nominee",
  },
  {
    id: 231,
    name: "Matt LeBlanc",
    month: 7,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Matt_LeBlanc_2013_Shankbone_2_%28cropped%29.JPG/500px-Matt_LeBlanc_2013_Shankbone_2_%28cropped%29.JPG",
    bio: "American actor and television host. He gained worldwide recognition for his role as Joey Tribbiani on the NBC sitcom Friends and its spin-off Joey. He has received various awards and nominations for his work.",
    achievement: "Golden Globe Nominee",
  },
  {
    id: 232,
    name: "Matthew Perry",
    month: 8,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matthew_Perry_2013_Shankbone_2_%28cropped%29.JPG/500px-Matthew_Perry_2013_Shankbone_2_%28cropped%29.JPG",
    bio: "American-Canadian actor and comedian. He gained worldwide recognition for his role as Chandler Bing on the NBC television sitcom Friends. He also appeared on Ally McBeal and received Primetime Emmy Award nominations.",
    achievement: "Emmy Nominee",
  },
  {
    id: 233,
    name: "Kaley Cuoco",
    month: 11,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kaley_Cuoco_2019_%28cropped%29.jpg/500px-Kaley_Cuoco_2019_%28cropped%29.jpg",
    bio: "American actress and producer. She is best known for her role as Penny in the CBS sitcom The Big Bang Theory. She began her career as a child actress and has since appeared in numerous films and television series.",
    achievement: "Critics' Choice Award Winner",
  },
  {
    id: 234,
    name: "Jim Parsons",
    month: 3,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jim_Parsons_2015_%28cropped%29.jpg/500px-Jim_Parsons_2015_%28cropped%29.jpg",
    bio: "American actor. He is best known for playing Sheldon Cooper in the CBS sitcom The Big Bang Theory. He has received various accolades, including four Primetime Emmy Awards and a Golden Globe Award.",
    achievement: "Four-Time Emmy Winner",
  },
  {
    id: 235,
    name: "Johnny Galecki",
    month: 4,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Johnny_Galecki_2013_%28cropped%29.jpg/500px-Johnny_Galecki_2013_%28cropped%29.jpg",
    bio: "American actor. He is best known for his role as Leonard Hofstadter in the CBS sitcom The Big Bang Theory and as David Healy in the ABC sitcom Roseanne. He has received various awards and nominations for his work.",
    achievement: "People's Choice Award Winner",
  },
  {
    id: 236,
    name: "Simon Helberg",
    month: 12,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Simon_Helberg_2013_%28cropped%29.jpg/500px-Simon_Helberg_2013_%28cropped%29.jpg",
    bio: "American actor, comedian, and musician. He is best known for his role as Howard Wolowitz on the CBS sitcom The Big Bang Theory. He has also appeared in films such as A Serious Man and Florence Foster Jenkins.",
    achievement: "Critics' Choice Award Nominee",
  },
  {
    id: 237,
    name: "Kunal Nayyar",
    month: 4,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kunal_Nayyar_2013_%28cropped%29.jpg/500px-Kunal_Nayyar_2013_%28cropped%29.jpg",
    bio: "British-American actor and author. He is best known for his role as Raj Koothrappali on the CBS sitcom The Big Bang Theory. He has also appeared in films and stage productions, and has written a memoir.",
    achievement: "Screen Actors Guild Award Winner",
  },
  {
    id: 238,
    name: "Mayim Bialik",
    month: 12,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mayim_Bialik_2013_%28cropped%29.jpg/500px-Mayim_Bialik_2013_%28cropped%29.jpg",
    bio: "American actress and neuroscientist. She is known for playing the title character of the NBC sitcom Blossom and Amy Farrah Fowler on the CBS sitcom The Big Bang Theory. She has a PhD in neuroscience from UCLA.",
    achievement: "Critics' Choice Award Winner",
  },
  {
    id: 239,
    name: "Melissa Rauch",
    month: 6,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Melissa_Rauch_2013_%28cropped%29.jpg/500px-Melissa_Rauch_2013_%28cropped%29.jpg",
    bio: "American actress and comedian. She is best known for playing Bernadette Rostenkowski-Wolowitz on the CBS sitcom The Big Bang Theory. She has also appeared in films and other television series.",
    achievement: "Critics' Choice Award Nominee",
  },
  {
    id: 240,
    name: "Kevin Hart",
    month: 7,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kevin_Hart_2014_%28cropped%29.jpg/500px-Kevin_Hart_2014_%28cropped%29.jpg",
    bio: "American actor and comedian. He began his career by winning several amateur comedy competitions at clubs throughout New England. He has since starred in films and released comedy albums and tours.",
    achievement: "People's Choice Award Winner",
  },

  {
    id: 241,
    name: "Dwayne Johnson",
    month: 5,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dwayne_Johnson_2022_%28cropped%29.jpg/500px-Dwayne_Johnson_2022_%28cropped%29.jpg",
    bio: "American actor, film producer, and former professional wrestler. Widely known by his ring name 'The Rock', he is one of the highest-paid actors in the world and was a successful wrestler in the WWE.",
    achievement: "Highest-Paid Actor",
  },
  {
    id: 242,
    name: "Ryan Gosling",
    month: 11,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ryan_Gosling_2018_%28cropped%29.jpg/500px-Ryan_Gosling_2018_%28cropped%29.jpg",
    bio: "Canadian actor. Prominent in both independent film and major studio features of varying genres, his films have accrued a worldwide gross of over 1.9 billion USD. He has received various accolades, including a Golden Globe Award.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 243,
    name: "Jake Gyllenhaal",
    month: 12,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Jake_Gyllenhaal_2019_%28cropped%29.jpg/500px-Jake_Gyllenhaal_2019_%28cropped%29.jpg",
    bio: "American actor. Born into the Gyllenhaal family, he began acting as a child and made his film debut in City Slickers. He has received various accolades, including a BAFTA Award and nominations for an Academy Award and a Tony Award.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 244,
    name: "Andrew Garfield",
    month: 8,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Andrew_Garfield_2021_%28cropped%29.jpg/500px-Andrew_Garfield_2021_%28cropped%29.jpg",
    bio: "British-American actor. He has received various accolades, including a Tony Award, and has been nominated for an Academy Award, a BAFTA Award, and a Golden Globe Award. He is known for playing Spider-Man in the Amazing Spider-Man films.",
    achievement: "Tony Award Winner",
  },
  {
    id: 245,
    name: "Idris Elba",
    month: 9,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Idris_Elba_2019_%28cropped%29.jpg/500px-Idris_Elba_2019_%28cropped%29.jpg",
    bio: "English actor, producer, musician, and DJ. Known for roles including Stringer Bell in The Wire, DCI John Luther in Luther, and Nelson Mandela in Mandela: Long Walk to Freedom. He has been nominated for four Golden Globe Awards.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 246,
    name: "Dev Patel",
    month: 4,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dev_Patel_2017_%28cropped%29.jpg/500px-Dev_Patel_2017_%28cropped%29.jpg",
    bio: "British actor. He began his career playing Anwar Kharral in the E4 teen drama series Skins. His breakthrough role was in Slumdog Millionaire, for which he won a BAFTA Award and was nominated for a SAG Award.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 247,
    name: "Riz Ahmed",
    month: 12,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Riz_Ahmed_2019_%28cropped%29.jpg/500px-Riz_Ahmed_2019_%28cropped%29.jpg",
    bio: "British actor and rapper. He has received an Academy Award, a Primetime Emmy Award, and two British Academy Film Awards. He was named one of Time magazine's 100 most influential people in the world in 2017.",
    achievement: "Academy Award Winner",
  },
  {
    id: 248,
    name: "John David Washington",
    month: 7,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/John_David_Washington_2018_%28cropped%29.jpg/500px-John_David_Washington_2018_%28cropped%29.jpg",
    bio: "American actor and former professional football player. He is the son of actor Denzel Washington. He played college football at Morehouse College and signed with the St. Louis Rams as an undrafted free agent in 2006.",
    achievement: "Golden Globe Nominee",
  },
  {
    id: 249,
    name: "LaKeith Stanfield",
    month: 8,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/LaKeith_Stanfield_2018_%28cropped%29.jpg/500px-LaKeith_Stanfield_2018_%28cropped%29.jpg",
    bio: "American actor. He first gained recognition for his role in Short Term 12, and has since appeared in films such as Get Out, Sorry to Bother You, and Judas and the Black Messiah, for which he received an Academy Award nomination.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 250,
    name: "Donald Glover",
    month: 9,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Donald_Glover_2018.jpg/500px-Donald_Glover_2018.jpg",
    bio: "American actor, comedian, singer, writer, director, and producer. He performs musically under the stage name Childish Gambino. He created and stars in the Amazon Prime Video series Swarm.",
    achievement: "Multiple Emmy Winner",
  },
  {
    id: 251,
    name: "Awkwafina",
    month: 6,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Awkwafina_2019_%28cropped%29.jpg/500px-Awkwafina_2019_%28cropped%29.jpg",
    bio: "American actress, rapper, and comedian. She received critical acclaim for her role in The Farewell, for which she won a Golden Globe Award for Best Actress, becoming the first woman of Asian descent to win a Golden Globe in any lead actress film category.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 252,
    name: "Ali Wong",
    month: 4,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ali_Wong_2019_%28cropped%29.jpg/500px-Ali_Wong_2019_%28cropped%29.jpg",
    bio: "American stand-up comedian, actress, and writer. She is known for her Netflix comedy specials Baby Cobra and Hard Knock Wife, both of which she performed while pregnant. She co-created and starred in the Netflix series Beef.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 253,
    name: "Randall Park",
    month: 3,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Randall_Park_2019_%28cropped%29.jpg/500px-Randall_Park_2019_%28cropped%29.jpg",
    bio: "American actor, comedian, and writer. He is known for his roles as Louis Huang in the ABC sitcom Fresh Off the Boat and Kim's Convenience. He has also appeared in films such as The Interview and Always Be My Maybe.",
    achievement: "Critics' Choice Award Nominee",
  },
  {
    id: 254,
    name: "Steven Yeun",
    month: 12,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Steven_Yeun_2018_%28cropped%29.jpg/500px-Steven_Yeun_2018_%28cropped%29.jpg",
    bio: "American actor. He rose to prominence for his role as Glenn Rhee in the AMC television series The Walking Dead. He has since starred in films such as Burning and Minari, for which he received an Academy Award nomination.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 255,
    name: "Sandra Oh",
    month: 7,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Sandra_Oh_2018_%28cropped%29.jpg/500px-Sandra_Oh_2018_%28cropped%29.jpg",
    bio: "Canadian-American actress. She is known for her leading role as Dr. Cristina Yang on the ABC medical drama Grey's Anatomy and as MI5 officer Eve Polastri on the BBC America spy thriller series Killing Eve.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 256,
    name: "Ken Jeong",
    month: 7,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ken_Jeong_2013_%28cropped%29.jpg/500px-Ken_Jeong_2013_%28cropped%29.jpg",
    bio: "American actor, comedian, and physician. He is known for his roles as Ben Chang in the NBC series Community and as Mr. Chow in The Hangover film series. He was a practicing physician before focusing on his entertainment career.",
    achievement: "MTV Movie Award Winner",
  },
  {
    id: 257,
    name: "John Cho",
    month: 6,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/John_Cho_2019_%28cropped%29.jpg/500px-John_Cho_2019_%28cropped%29.jpg",
    bio: "American actor. He is known for his roles as Harold Lee in the Harold & Kumar film series, John Milner in the American Pie film series, and Sulu in the Star Trek film series. He was named one of People magazine's Sexiest Men Alive in 2022.",
    achievement: "MTV Movie Award Winner",
  },
  {
    id: 258,
    name: "Mindy Kaling",
    month: 6,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mindy_Kaling_2013.jpg/500px-Mindy_Kaling_2013.jpg",
    bio: "American actress, comedian, writer, and producer. She became known as a writer and actor on The Office, and later created and starred in The Mindy Project. She is known for breaking barriers for women of color in comedy.",
    achievement: "Emmy Nominee",
  },
  {
    id: 259,
    name: "Aziz Ansari",
    month: 2,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Aziz_Ansari_at_TIFF_2025_02.jpg/500px-Aziz_Ansari_at_TIFF_2025_02.jpg",
    bio: "American actor, comedian, and filmmaker. He is known for his role as Tom Haverford on the NBC series Parks and Recreation and for creating and starring in the Netflix series Master of None, for which he won several Emmy Awards.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 260,
    name: "Hasan Minhaj",
    month: 9,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Hasan_Minhaj_2019_%28cropped%29.jpg/500px-Hasan_Minhaj_2019_%28cropped%29.jpg",
    bio: "American comedian, writer, producer, political commentator, actor, and television host. He is the host of the Netflix talk show Patriot Act with Hasan Minhaj, for which he won a Peabody Award and two Webby Awards.",
    achievement: "Peabody Award Winner",
  },
  {
    id: 261,
    name: "Kumail Nanjiani",
    month: 2,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kumail_Nanjiani_2019_%28cropped%29.jpg/500px-Kumail_Nanjiani_2019_%28cropped%29.jpg",
    bio: "Pakistani-American actor, stand-up comedian, screenwriter, and podcaster. He is known for his role as Dinesh in the HBO series Silicon Valley and for co-writing and starring in The Big Sick, for which he received an Academy Award nomination.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 262,
    name: "Manny Jacinto",
    month: 8,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Manny_Jacinto_2019_%28cropped%29.jpg/500px-Manny_Jacinto_2019_%28cropped%29.jpg",
    bio: "Canadian actor. He is best known for his role as Jason Mendoza on the NBC fantasy comedy series The Good Place. He has also appeared in films such as Top Gun: Maverick and I Want You Back.",
    achievement: "Critics' Choice Award Nominee",
  },
  {
    id: 263,
    name: "Henry Golding",
    month: 2,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Henry_Golding_2019_%28cropped%29.jpg/500px-Henry_Golding_2019_%28cropped%29.jpg",
    bio: "Malaysian-British actor and television host. He first gained recognition for his role as Nick Young in the romantic comedy Crazy Rich Asians. He has since starred in films such as A Simple Favor and Last Christmas.",
    achievement: "People's Choice Award Winner",
  },
  {
    id: 264,
    name: "Gemma Chan",
    month: 11,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gemma_Chan_2019_%28cropped%29.jpg/500px-Gemma_Chan_2019_%28cropped%29.jpg",
    bio: "English actress. She began her career with roles in the television series Sherlock and Fresh Meat. She gained wider recognition for her roles in Crazy Rich Asians and Captain Marvel. She is also known for her activism work.",
    achievement: "BAFTA Breakthrough Brit",
  },
  {
    id: 265,
    name: "Constance Wu",
    month: 3,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Constance_Wu_2019_%28cropped%29.jpg/500px-Constance_Wu_2019_%28cropped%29.jpg",
    bio: "American actress. She is known for her starring role as Jessica Huang in the ABC sitcom Fresh Off the Boat and for her role as Rachel Chu in the film Crazy Rich Asians. She has received various award nominations for her work.",
    achievement: "Golden Globe Nominee",
  },
  {
    id: 266,
    name: "Michelle Yeoh",
    month: 8,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Michelle_Yeoh_2023_%28cropped%29.jpg/500px-Michelle_Yeoh_2023_%28cropped%29.jpg",
    bio: "Malaysian actress. She is known for performing her own stunts in Hong Kong action films. She gained international recognition for her roles in Crouching Tiger, Hidden Dragon and Everything Everywhere All at Once, for which she won an Academy Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 267,
    name: "Ke Huy Quan",
    month: 8,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ke_Huy_Quan_2022_%28cropped%29.jpg/500px-Ke_Huy_Quan_2022_%28cropped%29.jpg",
    bio: "Vietnamese-American actor. He began his career as a child actor, appearing in films such as Indiana Jones and the Temple of Doom and The Goonies. He returned to acting in Everything Everywhere All at Once, for which he won an Academy Award.",
    achievement: "Academy Award Winner",
  },
  {
    id: 268,
    name: "Jamie Lee Curtis",
    month: 11,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Jamie_Lee_Curtis_2019_%28cropped%29.jpg/500px-Jamie_Lee_Curtis_2019_%28cropped%29.jpg",
    bio: "American actress and author. She made her film debut in Halloween and later starred in films such as Trading Places, True Lies, and Freaky Friday. She won an Academy Award for her role in Everything Everywhere All at Once.",
    achievement: "Academy Award Winner",
  },
  {
    id: 269,
    name: "Stephanie Hsu",
    month: 11,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Stephanie_Hsu_2022_%28cropped%29.jpg/500px-Stephanie_Hsu_2022_%28cropped%29.jpg",
    bio: "American actress. She is known for her role as Mei in the Marvel Cinematic Universe film Shang-Chi and the Legend of the Ten Rings and for her dual role in Everything Everywhere All at Once, for which she received an Academy Award nomination.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 270,
    name: "James Hong",
    month: 2,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/James_Hong_2011_%28cropped%29.jpg/500px-James_Hong_2011_%28cropped%29.jpg",
    bio: "American actor, director, and producer. He has appeared in over 600 films and television shows, including Big Trouble in Little China, Blade Runner, and Everything Everywhere All at Once. He received a star on the Hollywood Walk of Fame in 2022.",
    achievement: "Hollywood Walk of Fame",
  },

  {
    id: 271,
    name: "Pedro Pascal",
    month: 4,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pedro_Pascal_by_Gage_Skidmore.jpg/500px-Pedro_Pascal_by_Gage_Skidmore.jpg",
    bio: "Chilean-American actor. He rose to prominence for his roles in television series such as Game of Thrones, Narcos, and The Mandalorian. Known for his versatility in both dramatic and comedic roles.",
    achievement: "Emmy Nominee",
  },
  {
    id: 272,
    name: "Bella Ramsey",
    month: 9,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bella_Ramsey_%2849669852768%29_%28cropped%29.jpg/500px-Bella_Ramsey_%2849669852768%29_%28cropped%29.jpg",
    bio: "English actor. They made their professional acting debut as Lyanna Mormont in the HBO fantasy series Game of Thrones and gained wider recognition for starring as Ellie in the HBO series The Last of Us.",
    achievement: "Critics' Choice Award Winner",
  },
  {
    id: 273,
    name: "Jenny Ortega",
    month: 9,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Jenna_Ortega_2022_%28cropped%29.jpg/500px-Jenna_Ortega_2022_%28cropped%29.jpg",
    bio: "American actress. She began her career as a child actress, receiving recognition for her role as Young Jane on The CW comedy-drama series Jane the Virgin. Known for her role as Wednesday Addams in the Netflix series Wednesday.",
    achievement: "Saturn Award Winner",
  },
  {
    id: 274,
    name: "Joseph Quinn",
    month: 1,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Joseph_Quinn_2022_%28cropped%29.jpg/500px-Joseph_Quinn_2022_%28cropped%29.jpg",
    bio: "English actor. He is best known for his role as Eddie Munson in the fourth season of the Netflix series Stranger Things. He began his career with roles in British television series before gaining international recognition.",
    achievement: "Screen Actors Guild Award Nominee",
  },
  {
    id: 275,
    name: "Sydney Sweeney",
    month: 9,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sydney_Sweeney_2022_%28cropped%29.jpg/500px-Sydney_Sweeney_2022_%28cropped%29.jpg",
    bio: "American actress. She gained recognition for her roles as Haley Caren in the Netflix series Everything Sucks! and as Emaline Addario in the Hulu series The Handmaid's Tale. She is also known for her role in Euphoria.",
    achievement: "Two-Time Emmy Nominee",
  },
  {
    id: 276,
    name: "Jacob Elordi",
    month: 6,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jacob_Elordi_2022_%28cropped%29.jpg/500px-Jacob_Elordi_2022_%28cropped%29.jpg",
    bio: "Australian actor. He gained prominence for his role as Noah Flynn in the Netflix romantic comedy film The Kissing Booth and its sequels. He later starred as Nate Jacobs in the HBO series Euphoria.",
    achievement: "MTV Movie Award Winner",
  },
  //   {
  //     id: 277,
  //     name: "Florence Pugh",
  //     month: 1,
  //     day: 3,
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Florence_Pugh_2019_by_Glenn_Francis.jpg/500px-Florence_Pugh_2019_by_Glenn_Francis.jpg",
  //     bio: "English actress. She made her professional acting debut in the drama film The Falling and gained recognition for her role in Lady Macbeth. Known for her roles in Little Women, Midsommar, and Black Widow.",
  //     achievement: "BAFTA Award Winner"
  //   },
  {
    id: 278,
    name: "Paul Mescal",
    month: 2,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Paul_Mescal_%2849644850867%29_%28cropped%29.jpg/500px-Paul_Mescal_%2849644850867%29_%28cropped%29.jpg",
    bio: "Irish actor. He gained recognition for his breakout role as Connell Waldron in the television miniseries Normal People, for which he received a BAFTA TV Award. Known for his naturalistic acting style.",
    achievement: "BAFTA TV Award Winner",
  },
  {
    id: 279,
    name: "Ayo Edebiri",
    month: 10,
    day: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ayo_Edebiri_2023_%28cropped%29.jpg/500px-Ayo_Edebiri_2023_%28cropped%29.jpg",
    bio: "American actress, comedian, and writer. She is known for her role as Sydney Adamu in the FX comedy-drama series The Bear, for which she won a Primetime Emmy Award. She began her career as a stand-up comedian and writer.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 280,
    name: "Jeremy Allen White",
    month: 2,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jeremy_Allen_White_2022_%28cropped%29.jpg/500px-Jeremy_Allen_White_2022_%28cropped%29.jpg",
    bio: "American actor. He is best known for his role as Philip 'Lip' Gallagher in the Showtime comedy-drama series Shameless and as Carmen 'Carmy' Berzatto in the FX comedy-drama series The Bear.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 281,
    name: "Rachel Sennott",
    month: 9,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rachel_Sennott_2022_%28cropped%29.jpg/500px-Rachel_Sennott_2022_%28cropped%29.jpg",
    bio: "American actress and comedian. She is known for her roles in independent films such as Shiva Baby and Bodies Bodies Bodies. She began her career performing stand-up comedy while studying at New York University.",
    achievement: "Gotham Award Nominee",
  },
  {
    id: 282,
    name: "Lee Jung-jae",
    month: 12,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lee_Jung-jae_2022_%28cropped%29.jpg/500px-Lee_Jung-jae_2022_%28cropped%29.jpg",
    bio: "South Korean actor and filmmaker. He gained international recognition for his role as Seong Gi-hun in the Netflix series Squid Game, for which he won a Primetime Emmy Award, becoming the first Asian actor to win Outstanding Lead Actor in a Drama Series.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 283,
    name: "HoYeon Jung",
    month: 6,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/HoYeon_Jung_2022_%28cropped%29.jpg/500px-HoYeon_Jung_2022_%28cropped%29.jpg",
    bio: "South Korean model and actress. She began her career as a freelance model in 2010, walking in numerous Seoul Fashion Week shows. She gained worldwide recognition for her role as Kang Sae-byeok in the Netflix series Squid Game.",
    achievement: "Screen Actors Guild Award Winner",
  },
  {
    id: 284,
    name: "Park Hae-soo",
    month: 11,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Park_Hae-soo_2022_%28cropped%29.jpg/500px-Park_Hae-soo_2022_%28cropped%29.jpg",
    bio: "South Korean actor. He is best known for his roles in the Netflix series Squid Game as Cho Sang-woo and in the Netflix series Money Heist: Korea - Joint Economic Area as Berlin. He began his career in theater before transitioning to television.",
    achievement: "Screen Actors Guild Award Winner",
  },
  {
    id: 285,
    name: "Anya Taylor-Joy",
    month: 4,
    day: 16,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Anya_Taylor-Joy_%28cropped%29.jpg/500px-Anya_Taylor-Joy_%28cropped%29.jpg",
    bio: "British-American actress. She made her acting debut in the fantasy series Atlantis and had her breakthrough in the horror film The Witch. Known for her roles in The Queen's Gambit and Emma.",
    achievement: "Golden Globe Winner",
  },
  {
    id: 286,
    name: "Moses Ingram",
    month: 8,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Moses_Ingram_2022_%28cropped%29.jpg/500px-Moses_Ingram_2022_%28cropped%29.jpg",
    bio: "American actress. She is best known for her role as Jolene in the Netflix miniseries The Queen's Gambit, for which she received a Primetime Emmy Award nomination. She later starred as Reva Sevander in the Disney+ series Obi-Wan Kenobi.",
    achievement: "Emmy Nominee",
  },
  {
    id: 287,
    name: "Jonathan Bailey",
    month: 4,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jonathan_Bailey_2022_%28cropped%29.jpg/500px-Jonathan_Bailey_2022_%28cropped%29.jpg",
    bio: "English actor. He is best known for his role as Anthony Bridgerton in the Netflix series Bridgerton. He began his career as a child actor in the Royal Shakespeare Company and has since appeared in numerous stage productions.",
    achievement: "Olivier Award Winner",
  },
  {
    id: 288,
    name: "Simone Ashley",
    month: 3,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Simone_Ashley_2022_%28cropped%29.jpg/500px-Simone_Ashley_2022_%28cropped%29.jpg",
    bio: "British actress. She is best known for her role as Kate Sharma in the second season of the Netflix series Bridgerton. She previously played Olivia Hanan in the Netflix teen series Sex Education.",
    achievement: "Hollywood Critics Award Winner",
  },
  {
    id: 289,
    name: "Regé-Jean Page",
    month: 4,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Reg%C3%A9-Jean_Page_2021_%28cropped%29.jpg/500px-Reg%C3%A9-Jean_Page_2021_%28cropped%29.jpg",
    bio: "British actor. He is best known for his role as Simon Basset, Duke of Hastings, in the first season of the Netflix series Bridgerton. He began his career in theater and had minor television roles before gaining international recognition.",
    achievement: "NAACP Image Award Winner",
  },
  {
    id: 290,
    name: "Phoebe Dynevor",
    month: 4,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Phoebe_Dynevor_2021_%28cropped%29.jpg/500px-Phoebe_Dynevor_2021_%28cropped%29.jpg",
    bio: "English actress. She is best known for her role as Daphne Basset in the first season of the Netflix series Bridgerton. She began her career as a child actress and had roles in British television series before gaining international recognition.",
    achievement: "Screen Actors Guild Award Nominee",
  },
  {
    id: 291,
    name: "Nicola Coughlan",
    month: 1,
    day: 9,
    image: "/images/Unknown.jpg",
    bio: "Irish actress. She is best known for her role as Clare Devlin in the Channel 4 sitcom Derry Girls and as Penelope Featherington in the Netflix series Bridgerton. She began her career in theater before transitioning to television.",
    achievement: "Irish Film & Television Award Winner",
  },
  {
    id: 292,
    name: "Luke Newton",
    month: 2,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Luke_Newton_2022_%28cropped%29.jpg/500px-Luke_Newton_2022_%28cropped%29.jpg",
    bio: "English actor. He is best known for his role as Colin Bridgerton in the Netflix series Bridgerton. He began his career in theater and had minor television roles before being cast in the popular Netflix series.",
    achievement: "Screen Actors Guild Award Nominee",
  },
  {
    id: 293,
    name: "Claudia Jessie",
    month: 10,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Claudia_Jessie_2022_%28cropped%29.jpg/500px-Claudia_Jessie_2022_%28cropped%29.jpg",
    bio: "English actress. She is best known for her role as Eloise Bridgerton in the Netflix series Bridgerton. She began her career in theater and had roles in British television series before gaining international recognition.",
    achievement: "Screen Actors Guild Award Nominee",
  },
  {
    id: 294,
    name: "Charithra Chandran",
    month: 9,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Charithra_Chandran_2022_%28cropped%29.jpg/500px-Charithra_Chandran_2022_%28cropped%29.jpg",
    bio: "British actress. She is best known for her role as Edwina Sharma in the second season of the Netflix series Bridgerton. She made her acting debut in the series after studying politics and philosophy at university.",
    achievement: "Hollywood Critics Award Nominee",
  },
  {
    id: 295,
    name: "India Amarteifio",
    month: 9,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/India_Amarteifio_2023_%28cropped%29.jpg/500px-India_Amarteifio_2023_%28cropped%29.jpg",
    bio: "British actress. She is best known for her role as young Queen Charlotte in the Netflix series Queen Charlotte: A Bridgerton Story. She began her career in theater and had minor television roles before being cast in the Bridgerton universe.",
    achievement: "Rising Star Award Winner",
  },
  {
    id: 296,
    name: "Corey Mylchreest",
    month: 3,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Corey_Mylchreest_2023_%28cropped%29.jpg/500px-Corey_Mylchreest_2023_%28cropped%29.jpg",
    bio: "British actor. He is best known for his role as young King George III in the Netflix series Queen Charlotte: A Bridgerton Story. He graduated from the Royal Academy of Dramatic Art in 2020 and quickly rose to prominence.",
    achievement: "Hollywood Critics Award Nominee",
  },
  {
    id: 297,
    name: "Adjoa Andoh",
    month: 1,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Adjoa_Andoh_2022_%28cropped%29.jpg/500px-Adjoa_Andoh_2022_%28cropped%29.jpg",
    bio: "British actress, director, and writer. She is best known for her role as Lady Danbury in the Netflix series Bridgerton and its spin-off Queen Charlotte: A Bridgerton Story. She has had a long career in British theater, television, and radio.",
    achievement: "Screen Actors Guild Award Winner",
  },
  {
    id: 298,
    name: "Golda Rosheuvel",
    month: 1,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Golda_rosheuvel_bts.jpg/500px-Golda_rosheuvel_bts.jpg",
    bio: "British actress and singer. She is best known for her role as Queen Charlotte in the Netflix series Bridgerton and its spin-off Queen Charlotte: A Bridgerton Story. She has had a successful career in British theater and television.",
    achievement: "Screen Actors Guild Award Winner",
  },
  {
    id: 299,
    name: "Ruth Gemmell",
    month: 11,
    day: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ruth_Gemmell_2022_%28cropped%29.jpg/500px-Ruth_Gemmell_2022_%28cropped%29.jpg",
    bio: "English actress. She is best known for her role as Violet Bridgerton in the Netflix series Bridgerton. She has had a long career in British television and theater, appearing in numerous productions since the early 1990s.",
    achievement: "Screen Actors Guild Award Nominee",
  },
  {
    id: 300,
    name: "Julie Andrews",
    month: 10,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Julie_Andrews_2011_Shankbone_2_%28cropped%29.JPG/500px-Julie_Andrews_2011_Shankbone_2_%28cropped%29.JPG",
    bio: "English actress, singer, and author. She is known for her roles in Mary Poppins and The Sound of Music. She has received numerous accolades, including an Academy Award, a BAFTA Award, and multiple Grammy Awards.",
    achievement: "Academy Award Winner",
  },

  {
    id: 301,
    name: "David Tennant",
    month: 4,
    day: 18,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/David_Tennant_2023_%28cropped%29.jpg/500px-David_Tennant_2023_%28cropped%29.jpg",
    bio: "Scottish actor. He is best known for his role as the tenth incarnation of the Doctor in Doctor Who, and for his work in theatre with the Royal Shakespeare Company. He has won numerous awards including four BAFTA Scotland Awards.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 302,
    name: "Michael Sheen",
    month: 2,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Michael_Sheen_2014_%28cropped%29.jpg/500px-Michael_Sheen_2014_%28cropped%29.jpg",
    bio: "Welsh actor and political activist. Known for his roles in The Queen, Frost/Nixon, and the Underworld series. He is a prolific stage actor and has been nominated for three BAFTA Awards and an Emmy Award.",
    achievement: "Three-Time BAFTA Nominee",
  },
  {
    id: 303,
    name: "Olivia Colman",
    month: 1,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Olivia_Colman_2014_%28cropped%29.jpg/500px-Olivia_Colman_2014_%28cropped%29.jpg",
    bio: "English actress. Known for her roles in The Favourite, The Crown, and Broadchurch. She has won an Academy Award, four BAFTA Awards, two Golden Globe Awards, and three Emmy Awards.",
    achievement: "Academy Award Winner",
  },
  {
    id: 304,
    name: "Martin Freeman",
    month: 9,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Martin_Freeman_2014_%28cropped%29.jpg/500px-Martin_Freeman_2014_%28cropped%29.jpg",
    bio: "English actor. Known for his roles as Tim Canterbury in The Office, Dr. John Watson in Sherlock, Bilbo Baggins in The Hobbit film series, and Everett K. Ross in the Marvel Cinematic Universe.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 305,
    name: "Jodie Whittaker",
    month: 6,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Jodie_Whittaker_2018_%28cropped%29.jpg/500px-Jodie_Whittaker_2018_%28cropped%29.jpg",
    bio: "English actress. She is best known for being the first woman to play the title role in Doctor Who. She is also known for her roles in Broadchurch, Attack the Block, and Adult Life Skills.",
    achievement: "First Female Doctor Who",
  },
  {
    id: 306,
    name: "Peter Capaldi",
    month: 4,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Peter_Capaldi_2014_%28cropped%29.jpg/500px-Peter_Capaldi_2014_%28cropped%29.jpg",
    bio: "Scottish actor and filmmaker. He is best known for playing the twelfth incarnation of the Doctor in Doctor Who and Malcolm Tucker in The Thick of It. He has won four BAFTA Awards for his work.",
    achievement: "Four-Time BAFTA Winner",
  },
  {
    id: 307,
    name: "Matt Smith",
    month: 10,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Matt_Smith_2014_%28cropped%29.jpg/500px-Matt_Smith_2014_%28cropped%29.jpg",
    bio: "English actor. He is best known for his role as the eleventh incarnation of the Doctor in Doctor Who and as Prince Philip in The Crown. He has also appeared in films like Terminator Genisys and Last Night in Soho.",
    achievement: "BAFTA TV Award Winner",
  },
  {
    id: 308,
    name: "Jenna Coleman",
    month: 4,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jenna_Coleman_2014_%28cropped%29.jpg/500px-Jenna_Coleman_2014_%28cropped%29.jpg",
    bio: "English actress. She is known for playing Clara Oswald in Doctor Who, Queen Victoria in Victoria, and Joanna Lindsay in The Serpent. She began her career playing Jasmine Thomas in the soap opera Emmerdale.",
    achievement: "BAFATA Scotland Award Winner",
  },
  {
    id: 309,
    name: "Karen Gillan",
    month: 11,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Karen_Gillan_2014_%28cropped%29.jpg/500px-Karen_Gillan_2014_%28cropped%29.jpg",
    bio: "Scottish actress and filmmaker. She is best known for playing Amy Pond in Doctor Who and Nebula in the Marvel Cinematic Universe. She has also written, directed, and starred in the film The Party's Just Beginning.",
    achievement: "BAFTA Scotland Award Winner",
  },
  {
    id: 310,
    name: "Arthur Darvill",
    month: 6,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Arthur_Darvill_2013_%28cropped%29.jpg/500px-Arthur_Darvill_2013_%28cropped%29.jpg",
    bio: "English actor, musician, and composer. He is best known for playing Rory Williams in Doctor Who and Rev. Paul Coates in Broadchurch. He has also had a successful career in theatre, including roles in musicals.",
    achievement: "WhatsOnStage Award Winner",
  },
  {
    id: 311,
    name: "Alex Kingston",
    month: 3,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alex_Kingston_2014_%28cropped%29.jpg/500px-Alex_Kingston_2014_%28cropped%29.jpg",
    bio: "English actress. She is best known for playing River Song in Doctor Who and Dr. Elizabeth Corday in ER. She has had an extensive career in theatre, television, and film spanning over three decades.",
    achievement: "Saturn Award Nominee",
  },
  {
    id: 312,
    name: "John Barrowman",
    month: 3,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/John_Barrowman_2014_%28cropped%29.jpg/500px-John_Barrowman_2014_%28cropped%29.jpg",
    bio: "Scottish-American actor, singer, dancer, television presenter, and writer. He is known for playing Captain Jack Harkness in Doctor Who and its spin-off Torchwood. He has also had a successful career in musical theatre.",
    achievement: "National Television Award Winner",
  },
  {
    id: 313,
    name: "Billie Piper",
    month: 9,
    day: 22,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Billie_Piper_2014_%28cropped%29.jpg/500px-Billie_Piper_2014_%28cropped%29.jpg",
    bio: "English actress and former singer. She is known for playing Rose Tyler in Doctor Who and for creating and starring in the television series I Hate Suzie. She began her career as a pop singer in the late 1990s.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 314,
    name: "Catherine Tate",
    month: 5,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Catherine_Tate_2014_%28cropped%29.jpg/500px-Catherine_Tate_2014_%28cropped%29.jpg",
    bio: "English actress, comedian, and writer. She is best known for her role as Donna Noble in Doctor Who and for creating and starring in The Catherine Tate Show. She has won numerous awards including a BAFTA Award.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 315,
    name: "Freema Agyeman",
    month: 3,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Freema_Agyeman_2014_%28cropped%29.jpg/500px-Freema_Agyeman_2014_%28cropped%29.jpg",
    bio: "British actress. She is best known for playing Martha Jones in Doctor Who and its spin-off Torchwood, and for her role as Amanita Caplan in the Netflix series Sense8. She has also appeared in New Amsterdam.",
    achievement: "Screen Nation Award Winner",
  },
  {
    id: 316,
    name: "Noel Clarke",
    month: 12,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Noel_Clarke_2014_%28cropped%29.jpg/500px-Noel_Clarke_2014_%28cropped%29.jpg",
    bio: "English actor, screenwriter, director, and comic book writer. He is best known for playing Mickey Smith in Doctor Who and for creating and starring in the Hood film trilogy. He won the BAFTA Rising Star Award in 2009.",
    achievement: "BAFTA Rising Star Award",
  },
  {
    id: 317,
    name: "Pearl Mackie",
    month: 5,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pearl_Mackie_2017_%28cropped%29.jpg/500px-Pearl_Mackie_2017_%28cropped%29.jpg",
    bio: "English actress. She is best known for playing Bill Potts in Doctor Who. She made her professional acting debut in the play The Curious Incident of the Dog in the Night-Time in the West End before being cast in Doctor Who.",
    achievement: "Attitude Award Winner",
  },
  {
    id: 318,
    name: "Bradley Walsh",
    month: 6,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bradley_Walsh_2014_%28cropped%29.jpg/500px-Bradley_Walsh_2014_%28cropped%29.jpg",
    bio: "English television presenter, actor, comedian, singer, and former professional footballer. He is best known for playing Graham O'Brien in Doctor Who and for hosting The Chase and Breaking Dad.",
    achievement: "National Television Award Winner",
  },
  {
    id: 319,
    name: "Mandip Gill",
    month: 5,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mandip_Gill_2018_%28cropped%29.jpg/500px-Mandip_Gill_2018_%28cropped%29.jpg",
    bio: "English actress. She is best known for playing Yasmin Khan in Doctor Who. She previously played Phoebe McQueen in the Channel 4 soap opera Hollyoaks before being cast in Doctor Who.",
    achievement: "Asian Media Award Winner",
  },
  {
    id: 320,
    name: "John Bishop",
    month: 11,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/John_Bishop_2014_%28cropped%29.jpg/500px-John_Bishop_2014_%28cropped%29.jpg",
    bio: "English comedian, presenter, and actor. He is best known for playing Dan Lewis in Doctor Who. He began his career as a comedian in 2000 and has since become one of the UK's most popular comedians.",
    achievement: "British Comedy Award Winner",
  },
  {
    id: 321,
    name: "Jemma Redgrave",
    month: 1,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jemma_Redgrave_2014_%28cropped%29.jpg/500px-Jemma_Redgrave_2014_%28cropped%29.jpg",
    bio: "English actress. She is best known for playing Kate Stewart in Doctor Who and for her roles in Bramwell and Howard's End. She comes from the Redgrave family, a well-known British acting dynasty.",
    achievement: "Theatre World Award Winner",
  },
  {
    id: 322,
    name: "Ingrid Oliver",
    month: 2,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ingrid_Oliver_2014_%28cropped%29.jpg/500px-Ingrid_Oliver_2014_%28cropped%29.jpg",
    bio: "English actress, comedian, and writer. She is best known for playing Petronella Osgood in Doctor Who and for being one half of the comedy duo Watson & Oliver. She has also appeared in numerous television comedies.",
    achievement: "British Comedy Award Nominee",
  },
  {
    id: 323,
    name: "Mark Gatiss",
    month: 10,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mark_Gatiss_2014_%28cropped%29.jpg/500px-Mark_Gatiss_2014_%28cropped%29.jpg",
    bio: "English actor, comedian, screenwriter, director, and novelist. He is best known for his work on Doctor Who, Sherlock, and Game of Thrones. He is a member of the comedy team The League of Gentlemen.",
    achievement: "BAFTA Award Winner",
  },
  {
    id: 324,
    name: "Neve McIntosh",
    month: 9,
    day: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Neve_McIntosh_2014_%28cropped%29.jpg/500px-Neve_McIntosh_2014_%28cropped%29.jpg",
    bio: "Scottish actress. She is best known for playing Madame Vastra in Doctor Who and for her roles in Lip Service and The Catherine Tate Show. She has had an extensive career in theatre, television, and film.",
    achievement: "BAFTA Scotland Award Nominee",
  },
  {
    id: 325,
    name: "Dan Starkey",
    month: 1,
    day: 27,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Dan_Starkey_2014_%28cropped%29.jpg/500px-Dan_Starkey_2014_%28cropped%29.jpg",
    bio: "English actor. He is best known for playing various Sontaran characters in Doctor Who, primarily Strax. He has also appeared in numerous other television series and has a background in theatre.",
    achievement: "Audio Drama Award Winner",
  },
  {
    id: 326,
    name: "Sophie Aldred",
    month: 8,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sophie_Aldred_2014_%28cropped%29.jpg/500px-Sophie_Aldred_2014_%28cropped%29.jpg",
    bio: "English actress and television presenter. She is best known for playing Ace in Doctor Who. She has also worked extensively in children's television and as a voice actress for animated series.",
    achievement: "Doctor Who Magazine Award Winner",
  },
  {
    id: 327,
    name: "Peter Davison",
    month: 4,
    day: 13,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Peter_Davison_2014_%28cropped%29.jpg/500px-Peter_Davison_2014_%28cropped%29.jpg",
    bio: "English actor. He is best known for playing the fifth incarnation of the Doctor in Doctor Who and Tristan Farnon in All Creatures Great and Small. He is the father-in-law of David Tennant.",
    achievement: "National Television Award Winner",
  },
  {
    id: 328,
    name: "Colin Baker",
    month: 6,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Colin_Baker_2014_%28cropped%29.jpg/500px-Colin_Baker_2014_%28cropped%29.jpg",
    bio: "English actor. He is best known for playing the sixth incarnation of the Doctor in Doctor Who. He has had an extensive career in theatre and television spanning over five decades.",
    achievement: "Doctor Who Magazine Award Winner",
  },
  {
    id: 329,
    name: "Sylvester McCoy",
    month: 8,
    day: 20,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sylvester_McCoy_2014_%28cropped%29.jpg/500px-Sylvester_McCoy_2014_%28cropped%29.jpg",
    bio: "Scottish actor. He is best known for playing the seventh incarnation of the Doctor in Doctor Who and Radagast in The Hobbit film series. He began his career as a comedy performer in the 1960s.",
    achievement: "SFX Award Winner",
  },
  {
    id: 330,
    name: "Paul McGann",
    month: 11,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Paul_McGann_2014_%28cropped%29.jpg/500px-Paul_McGann_2014_%28cropped%29.jpg",
    bio: "English actor. He is best known for playing the eighth incarnation of the Doctor in Doctor Who and for his role in Withnail and I. He comes from the McGann family, a well-known British acting family.",
    achievement: "Royal Television Society Award Winner",
  },

  {
    id: 331,
    name: "Miley Cyrus",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg/500px-Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg",
    bio: "American singer, songwriter, and actress. Known for her distinctive raspy voice and musical versatility, she achieved fame as the star of the Disney Channel series Hannah Montana and has since become a global pop sensation.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 332,
    name: "Boris Becker",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Boris_Becker_2019_%28cropped%29.jpg/500px-Boris_Becker_2019_%28cropped%29.jpg",
    bio: "German former professional tennis player. He is the youngest-ever winner of the gentlemen's singles Wimbledon Championships title, achieving this at age 17. He won six major singles titles during his career.",
    achievement: "Six-Time Grand Slam Champion",
  },
  {
    id: 333,
    name: "Nicole Brossard",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nicole_Brossard_2010.jpg/500px-Nicole_Brossard_2010.jpg",
    bio: "Canadian poet, novelist, and essayist. She is a leading figure in Quebec literature and feminist writing. She has published more than thirty books and has won numerous literary awards including the Governor General's Award.",
    achievement: "Governor General's Award Winner",
  },
  {
    id: 334,
    name: "Jerry Bock",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jerry_Bock_1960.jpg/500px-Jerry_Bock_1960.jpg",
    bio: "American musical theater composer. He is best known for his collaborations with lyricist Sheldon Harnick on musicals such as Fiorello! and Fiddler on the Roof, for which he won multiple Tony Awards and a Pulitzer Prize.",
    achievement: "Tony Award & Pulitzer Prize Winner",
  },
  {
    id: 335,
    name: "Krzysztof Penderecki",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Krzysztof_Penderecki_2008.jpg/500px-Krzysztof_Penderecki_2008.jpg",
    bio: "Polish composer and conductor. His best known works include Threnody to the Victims of Hiroshima, Symphony No. 3, and St. Luke Passion. He was considered one of the most important contemporary classical composers.",
    achievement: "Grammy Award Winner",
  },
  {
    id: 336,
    name: "Harpo Marx",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Harpo_Marx_1930s.jpg/500px-Harpo_Marx_1930s.jpg",
    bio: "American comedian, actor, and musician, the second-oldest of the Marx Brothers. He was known for his pantomime and harp performances, never speaking in any of the Marx Brothers films despite not being mute in real life.",
    achievement: "Hollywood Walk of Fame",
  },
  {
    id: 337,
    name: "Manuel de Falla",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Manuel_de_Falla_1914.jpg/500px-Manuel_de_Falla_1914.jpg",
    bio: "Spanish composer and pianist. He is one of Spain's most important musicians of the early 20th century, known for works such as The Three-Cornered Hat, Nights in the Gardens of Spain, and El amor brujo.",
    achievement: "Renowned Spanish Composer",
  },
  {
    id: 338,
    name: "Billy the Kid",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Billy_the_Kid_corrected.jpg/500px-Billy_the_Kid_corrected.jpg",
    bio: "American outlaw and gunfighter of the American Old West who killed eight men before he was shot and killed at age 21. He became an iconic figure in American folklore and the subject of many films and books.",
    achievement: "American Folk Legend",
  },
  {
    id: 339,
    name: "Franklin Pierce",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Franklin_Pierce_-_Daguerreotype_crop.jpg/500px-Franklin_Pierce_-_Daguerreotype_crop.jpg",
    bio: "14th president of the United States, serving from 1853 to 1857. A northern Democrat who believed that the abolitionist movement was a fundamental threat to the nation's unity, he alienated anti-slavery groups.",
    achievement: "14th U.S. President",
  },
  {
    id: 340,
    name: "José Clemente Orozco",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jose_Clemente_Orozco_%28photo_by_Carlos_Pel%C3%ADcer%29.jpg/500px-Jose_Clemente_Orozco_%28photo_by_Carlos_Pel%C3%ADcer%29.jpg",
    bio: "Mexican caricaturist and painter, who specialized in political murals that established the Mexican Mural Renaissance together with murals by Diego Rivera and others. He was the most complex of the Mexican muralists.",
    achievement: "Mexican Muralist Master",
  },
  {
    id: 341,
    name: "Bruce Vilanch",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bruce_Vilanch_2013.jpg/500px-Bruce_Vilanch_2013.jpg",
    bio: "American comedy writer, songwriter, and actor. He is best known for his work as a writer for the Academy Awards ceremony and for his appearances on Hollywood Squares. He has won two Emmy Awards for his writing.",
    achievement: "Two-Time Emmy Award Winner",
  },
  {
    id: 342,
    name: "Shane Gould",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Shane_Gould_2012.jpg/500px-Shane_Gould_2012.jpg",
    bio: "Australian former competition swimmer who won three gold medals, one silver, and one bronze at the 1972 Summer Olympics. She was the first female swimmer to win three Olympic gold medals in world record times.",
    achievement: "Five-Time Olympic Medalist",
  },
  {
    id: 343,
    name: "Jim Doyle",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jim_Doyle.jpg/500px-Jim_Doyle.jpg",
    bio: "American politician who served as the 44th governor of Wisconsin from 2003 to 2011. A member of the Democratic Party, he was previously Wisconsin's Attorney General and a federal prosecutor.",
    achievement: "44th Governor of Wisconsin",
  },
  {
    id: 344,
    name: "Kelly Brook",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kelly_Brook_2014_%28cropped%29.jpg/500px-Kelly_Brook_2014_%28cropped%29.jpg",
    bio: "English model, actress, and television presenter. She is known for her roles in films such as Piranha 3D and for her modeling work. She has been featured in numerous men's magazines and has worked as a television presenter.",
    achievement: "Model & Actress",
  },
  {
    id: 345,
    name: "Mary Landrieu",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mary_Landrieu_official_Senate_photo.jpg/500px-Mary_Landrieu_official_Senate_photo.jpg",
    bio: "American politician who served as a United States senator from Louisiana from 1997 to 2015. A member of the Democratic Party, she was the first woman elected to the Senate from Louisiana.",
    achievement: "U.S. Senator from Louisiana",
  },
  {
    id: 346,
    name: "Steven Yeun",
    month: 12,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Steven_Yeun_2018_%28cropped%29.jpg/500px-Steven_Yeun_2018_%28cropped%29.jpg",
    bio: "American actor. He rose to prominence for his role as Glenn Rhee in the AMC television series The Walking Dead. He has since starred in films such as Burning and Minari, for which he received an Academy Award nomination.",
    achievement: "Academy Award Nominee",
  },
  {
    id: 347,
    name: "Saiyid Kamal",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Saiyid_Kamal.jpg/500px-Saiyid_Kamal.jpg",
    bio: "Bangladeshi educator and former vice-chancellor of the University of Dhaka. He was a prominent academic and played a significant role in the development of higher education in Bangladesh.",
    achievement: "Academic & Educator",
  },
  {
    id: 348,
    name: "Page Hamilton",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Page_Hamilton_2009.jpg/500px-Page_Hamilton_2009.jpg",
    bio: "American musician, best known as the lead vocalist and guitarist of the alternative metal band Helmet. He has also worked as a producer and has collaborated with numerous other artists.",
    achievement: "Alternative Metal Musician",
  },
  {
    id: 349,
    name: "John Kovalic",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Kovalic_2009.jpg/500px-John_Kovalic_2009.jpg",
    bio: "British-born American cartoonist and game designer, best known for his comic strip Dork Tower and his work on the card game Munchkin. He has won multiple Origins Awards for his game design work.",
    achievement: "Award-Winning Cartoonist",
  },
  {
    id: 350,
    name: "Oded Fehr",
    month: 11,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Oded_Fehr_2013.jpg/500px-Oded_Fehr_2013.jpg",
    bio: "Israeli actor known for his roles in The Mummy film series as Ardeth Bay, in Resident Evil films as Carlos Olivera, and in television series such as Covert Affairs and The Blacklist.",
    achievement: "International Actor",
  },
  {
    id: 351,
    name: "Katherine Heigl",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Katherine_Heigl_2013_%28cropped%29.jpg/500px-Katherine_Heigl_2013_%28cropped%29.jpg",
    bio: "American actress and film producer. She gained recognition for her role as Dr. Izzie Stevens on the ABC medical drama Grey's Anatomy, for which she won a Primetime Emmy Award. She has also starred in numerous films.",
    achievement: "Emmy Award Winner",
  },
  {
    id: 352,
    name: "Ted Bundy",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ted_Bundy_Headshot_%28cropped%29.jpg/500px-Ted_Bundy_Headshot_%28cropped%29.jpg",
    bio: "American serial killer who kidnapped, raped, and murdered numerous young women and girls during the 1970s. He was executed in 1989 after more than a decade of violent attacks across multiple states.",
    achievement: "Notorious Criminal",
  },
  {
    id: 353,
    name: "Zachary Taylor",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zachary_Taylor_restored_and_cropped.jpg/500px-Zachary_Taylor_restored_and_cropped.jpg",
    bio: "12th president of the United States, serving from March 1849 until his death in July 1850. He was a career officer in the United States Army, rising to the rank of major general and becoming a national hero.",
    achievement: "12th U.S. President",
  },
  {
    id: 354,
    name: "Scott Joplin",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Scott_Joplin_19072.jpg/500px-Scott_Joplin_19072.jpg",
    bio: "American composer and pianist. Dubbed the 'King of Ragtime', he composed more than 100 ragtime pieces, one ragtime ballet, and two operas. His most famous work is 'The Entertainer'.",
    achievement: "King of Ragtime",
  },
  {
    id: 355,
    name: "Carlo Collodi",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Carlo_Collodi.jpg/500px-Carlo_Collodi.jpg",
    bio: "Italian author, humorist, and journalist, widely known for his fairy tale novel The Adventures of Pinocchio. He began his career as a journalist and became involved in political satire.",
    achievement: "Author of Pinocchio",
  },
  {
    id: 356,
    name: "Henri de Toulouse-Lautrec",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Henri_de_Toulouse-Lautrec_003.jpg/500px-Henri_de_Toulouse-Lautrec_003.jpg",
    bio: "French painter, printmaker, draughtsman, caricaturist, and illustrator whose immersion in the colorful and theatrical life of Paris in the late 19th century allowed him to produce a collection of enticing images.",
    achievement: "Post-Impressionist Painter",
  },
  {
    id: 357,
    name: "John Knox",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/John_Knox_%281577%29.jpg/500px-John_Knox_%281577%29.jpg",
    bio: "Scottish minister, theologian, and writer who was a leader of the country's Reformation. He is considered the founder of the Presbyterian Church of Scotland and played a key role in the Scottish Reformation.",
    achievement: "Scottish Reformer",
  },
  {
    id: 358,
    name: "Lorne Munroe",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lorne_Munroe.jpg/500px-Lorne_Munroe.jpg",
    bio: "Canadian-American cellist who served as the principal cellist of the Philadelphia Orchestra and later the New York Philharmonic. He was known for his rich tone and exceptional technique.",
    achievement: "Renowned Cellist",
  },
  {
    id: 359,
    name: "Charles-Michel de l'Épée",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Charles-Michel_de_l%27%C3%89p%C3%A9e.jpg/500px-Charles-Michel_de_l%27%C3%89p%C3%A9e.jpg",
    bio: "French philanthropic educator and founder of the first free school for the deaf. He is regarded as the 'Father of the Deaf' for his development of a systematic method of teaching deaf students.",
    achievement: "Pioneer of Deaf Education",
  },
  {
    id: 360,
    name: "Dale Carnegie",
    month: 11,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dale_Carnegie_%281889-1955%29.jpg/500px-Dale_Carnegie_%281889-1955%29.jpg",
    bio: "American writer and lecturer, and the developer of famous courses in self-improvement, salesmanship, corporate training, public speaking, and interpersonal skills. He wrote the iconic book 'How to Win Friends and Influence People'.",
    achievement: "Self-Improvement Pioneer",
  },

  {
    id: 361,
    name: "Henry Ford",
    month: 7,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Henry_ford_1919.jpg/500px-Henry_ford_1919.jpg",
    bio: "American industrialist and business magnate, founder of Ford Motor Company, and chief developer of the assembly line technique of mass production. He created the first automobile that middle-class Americans could afford.",
    achievement: "Founder of Ford Motor Company",
  },
  {
    id: 362,
    name: "Andrew Carnegie",
    month: 11,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Andrew_Carnegie%2C_three_quarter_length_portrait%2C_seated%2C_facing_slightly_left%2C_1913_crop.jpg/500px-Andrew_Carnegie%2C_three_quarter_length_portrait%2C_seated%2C_facing_slightly_left%2C_1913_crop.jpg",
    bio: "Scottish-American industrialist and philanthropist. He led the expansion of the American steel industry in the late 19th century and became one of the richest Americans in history. He later dedicated his life to philanthropy.",
    achievement: "Steel Magnate & Philanthropist",
  },
  {
    id: 363,
    name: "John D. Rockefeller",
    month: 7,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/JDRockefeller.jpg/500px-JDRockefeller.jpg",
    bio: "American business magnate and philanthropist. He is widely considered the wealthiest American of all time and the richest person in modern history. He was the founder of the Standard Oil Company.",
    achievement: "Founder of Standard Oil",
  },
  {
    id: 364,
    name: "J.P. Morgan",
    month: 4,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jpmorgan.jpg/500px-Jpmorgan.jpg",
    bio: "American financier and investment banker who dominated corporate finance on Wall Street throughout the Gilded Age. He was the driving force behind the formation of many large corporations including U.S. Steel.",
    achievement: "Influential Financier",
  },
  {
    id: 365,
    name: "Larry Page",
    month: 3,
    day: 26,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Larry_Page_in_2015_%28cropped%29.jpg/500px-Larry_Page_in_2015_%28cropped%29.jpg",
    bio: "American business magnate, computer scientist and internet entrepreneur. He is best known as one of the co-founders of Google along with Sergey Brin. He served as CEO of Google's parent company Alphabet.",
    achievement: "Co-founder of Google",
  },
  {
    id: 366,
    name: "Sergey Brin",
    month: 8,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sergey_Brin_Ted_2010.jpg/500px-Sergey_Brin_Ted_2010.jpg",
    bio: "American business magnate, computer scientist and internet entrepreneur. Together with Larry Page, he co-founded Google. Brin was the president of Google's parent company Alphabet until stepping down in 2019.",
    achievement: "Co-founder of Google",
  },
  {
    id: 367,
    name: "Larry Ellison",
    month: 8,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Larry_Ellison_-_full.jpg/500px-Larry_Ellison_-_full.jpg",
    bio: "American business magnate and investor who is the co-founder, executive chairman and chief technology officer of Oracle Corporation. He is one of the richest people in the world.",
    achievement: "Co-founder of Oracle",
  },
  {
    id: 368,
    name: "Michael Dell",
    month: 2,
    day: 23,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Michael_Dell_-_World_Economic_Forum_Annual_Meeting_2013.jpg/500px-Michael_Dell_-_World_Economic_Forum_Annual_Meeting_2013.jpg",
    bio: "American billionaire business magnate and investor. He is the founder, chairman and CEO of Dell Technologies, one of the world's largest technology infrastructure companies.",
    achievement: "Founder of Dell Technologies",
  },
  {
    id: 369,
    name: "Jack Ma",
    month: 9,
    day: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jack_Ma_2015.jpg/500px-Jack_Ma_2015.jpg",
    bio: "Chinese business magnate, investor and philanthropist. He is the co-founder and former executive chairman of Alibaba Group, a multinational technology conglomerate. He is one of China's richest men.",
    achievement: "Co-founder of Alibaba",
  },
  {
    id: 370,
    name: "Masayoshi Son",
    month: 8,
    day: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Masayoshi_Son_in_2010.jpg/500px-Masayoshi_Son_in_2010.jpg",
    bio: "Japanese billionaire businessman and investor who is the founder, chairman and CEO of SoftBank Group. He is known for his early investment in Alibaba and his Vision Fund for tech startups.",
    achievement: "Founder of SoftBank",
  },
  {
    id: 371,
    name: "Travis Kalanick",
    month: 8,
    day: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Travis_Kalanick_at_Web_2.0_Conference.jpg/500px-Travis_Kalanick_at_Web_2.0_Conference.jpg",
    bio: "American businessman and investor. He is the co-founder of the peer-to-peer file sharing company Red Swoosh and the transportation network company Uber. He served as CEO of Uber until 2017.",
    achievement: "Co-founder of Uber",
  },
  {
    id: 372,
    name: "Brian Chesky",
    month: 8,
    day: 29,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brian_Chesky_2018_%28cropped%29.jpg/500px-Brian_Chesky_2018_%28cropped%29.jpg",
    bio: "American billionaire businessman and industrial designer. He is the co-founder and CEO of Airbnb, the world's leading online marketplace for lodging and tourism experiences.",
    achievement: "Co-founder of Airbnb",
  },
  {
    id: 373,
    name: "Ahmad Shah Massoud",
    month: 9,
    day: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ahmad_Shah_Massoud_cropped.jpg/500px-Ahmad_Shah_Massoud_cropped.jpg",
    bio: "Afghan politician and military commander. He was a powerful guerrilla commander during the resistance against the Soviet occupation and later the Taliban. Known as the 'Lion of Panjshir' for his military successes.",
    achievement: "National Hero of Afghanistan",
  },
  {
    id: 374,
    name: "Khaled Hosseini",
    month: 3,
    day: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Khaled_Hosseini_%28cropped%29.jpg/500px-Khaled_Hosseini_%28cropped%29.jpg",
    bio: "Afghan-American novelist, physician, and former UNHCR goodwill ambassador. He is known for his bestselling novels 'The Kite Runner', 'A Thousand Splendid Suns', and 'And the Mountains Echoed'.",
    achievement: "Bestselling Author",
  },
  {
    id: 375,
    name: "Hamid Karzai",
    month: 12,
    day: 24,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Hamid_Karzai_2014.jpg/500px-Hamid_Karzai_2014.jpg",
    bio: "Afghan politician who served as the fourth president of Afghanistan from July 2002 to September 2014. He was the first democratically elected leader of Afghanistan after the fall of the Taliban regime.",
    achievement: "Former President of Afghanistan",
  },
  {
    id: 376,
    name: "Rumi",
    month: 9,
    day: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mowlana.jpg/500px-Mowlana.jpg",
    bio: "13th-century Persian poet, Islamic scholar, and Sufi mystic originally from Greater Khorasan in Greater Iran. His works are widely read and have influenced literature across the world.",
    achievement: "Influential Persian Poet",
  },
  {
    id: 377,
    name: "Zahiruddin Muhammad Babur",
    month: 2,
    day: 14,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Babur_idealised.jpg/500px-Babur_idealised.jpg",
    bio: "Founder of the Mughal Empire in the Indian subcontinent. He was a descendant of Timur and Genghis Khan. He wrote the Baburnama, which provides valuable details of the society and culture of his time.",
    achievement: "Founder of Mughal Empire",
  },
  {
    id: 378,
    name: "Malala Yousafzai",
    month: 7,
    day: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Malala_Yousafzai_-_2018_%2841958418041%29_%28cropped%29.jpg/500px-Malala_Yousafzai_-_2018_%2841958418041%29_%28cropped%29.jpg",
    bio: "Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially education for women in her native Swat Valley in Khyber Pakhtunkhwa.",
    achievement: "Youngest Nobel Prize Laureate",
  },
  {
    id: 379,
    name: "Abdul Ahad Mohmand",
    month: 1,
    day: 1,
    image:
      "https://www.spacefacts.de/bios/portraits_hi/international/mohmand_abdul.jpg",
    bio: "Afghan pilot and cosmonaut who became the first Afghan and fourth Muslim to travel to space. He spent nine days aboard the Mir space station in 1988 as part of the Intercosmos program.",
    achievement: "First Afghan in Space",
  },
  {
    id: 380,
    name: "Nadia Murad",
    month: 1,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nadia_Murad_2023_%28close-up%29.jpg/500px-Nadia_Murad_2023_%28close-up%29.jpg",
    bio: "Iraqi Yazidi human rights activist who was awarded the 2018 Nobel Peace Prize for her efforts to end the use of sexual violence as a weapon of war. She was kidnapped and held by ISIS for three months.",
    achievement: "Nobel Peace Prize Winner",
  },

  {
    id: 383,
    name: "Satya Nadella",
    month: 8,
    day: 19,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Satya_Nadella.jpg/500px-Satya_Nadella.jpg",
    bio: "Indian-American business executive. He is the executive chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014 as CEO and John W. Thompson in 2021 as chairman.",
    achievement: "CEO of Microsoft",
  },
  {
    id: 384,
    name: "Tim Cook",
    month: 11,
    day: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tim_Cook_2009_cropped.jpg/500px-Tim_Cook_2009_cropped.jpg",
    bio: "American business executive who has been the chief executive officer of Apple Inc. since 2011. Cook previously served as the company's chief operating officer under its co-founder Steve Jobs.",
    achievement: "CEO of Apple",
  },
  {
    id: 385,
    name: "Sheryl Sandberg",
    month: 8,
    day: 28,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sheryl_Sandberg_in_2013_%28cropped%29.jpg/500px-Sheryl_Sandberg_in_2013_%28cropped%29.jpg",
    bio: "American business executive, billionaire, and philanthropist. She is the chief operating officer of Meta Platforms and the founder of LeanIn.Org. She was previously vice president of global online sales at Google.",
    achievement: "COO of Meta Platforms",
  },
  {
    id: 386,
    name: "Susan Wojcicki",
    month: 7,
    day: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Susan_Wojcicki_at_WEF_2020.jpg/500px-Susan_Wojcicki_at_WEF_2020.jpg",
    bio: "American business executive who was the CEO of YouTube from 2014 to 2023. She has been involved in Google's development from its inception and was Google's first marketing manager in 1999.",
    achievement: "Former CEO of YouTube",
  },
  {
    id: 387,
    name: "Reed Hastings",
    month: 10,
    day: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Reed_Hastings_2015_%28cropped%29.jpg/500px-Reed_Hastings_2015_%28cropped%29.jpg",
    bio: "American billionaire businessman and philanthropist. He is the co-founder and executive chairman of Netflix, and currently sits on a number of boards and non-profit organizations.",
    achievement: "Co-founder of Netflix",
  },
  {
    id: 388,
    name: "Marc Benioff",
    month: 9,
    day: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Marc_Benioff_-_World_Economic_Forum_Annual_Meeting_2013.jpg/500px-Marc_Benioff_-_World_Economic_Forum_Annual_Meeting_2013.jpg",
    bio: "American billionaire businessman and philanthropist. He is the co-founder, chairman and CEO of Salesforce, an enterprise cloud computing company. He is known for his philanthropic 1-1-1 model.",
    achievement: "Co-founder of Salesforce",
  },
  {
    id: 389,
    name: "Daniel Ek",
    month: 2,
    day: 21,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Daniel_Ek_%282019%29.jpg/500px-Daniel_Ek_%282019%29.jpg",
    bio: "Swedish billionaire businessman and technologist. He is the co-founder and CEO of Spotify, a digital music streaming service. He previously worked at Tradera and Stardoll.",
    achievement: "Co-founder of Spotify",
  },
  {
    id: 390,
    name: "Brian Acton",
    month: 2,
    day: 17,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Brian_Acton_2013_%28cropped%29.jpg/500px-Brian_Acton_2013_%28cropped%29.jpg",
    bio: "American computer programmer and Internet entrepreneur. He is the co-founder of WhatsApp, a mobile messaging application which was acquired by Facebook in 2014 for US$19 billion.",
    achievement: "Co-founder of WhatsApp",
  },
  {
    id: 391,
    name: "Amber Riley",
    month: 2,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Amber_Riley_2.jpg/500px-Amber_Riley_2.jpg",
    bio: "American actress and singer who rose to fame for her role as Mercedes Jones on the Fox musical comedy series 'Glee', for which she won a Primetime Emmy Award.",
    achievement: "Primetime Emmy Award Winner for 'Glee'",
  },
  {
    id: 392,
    name: "Megan Thee Stallion",
    month: 2,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Megan_Thee_Stallion_%2852058688359%29_%28cropped%29.jpg/500px-Megan_Thee_Stallion_%2852058688359%29_%28cropped%29.jpg",
    bio: "American rapper, singer, and songwriter. She rose to prominence with her freestyle videos on social media and has since won multiple Grammy Awards, including Best New Artist.",
    achievement: "Grammy Award-Winning Rapper",
  },
  {
    id: 393,
    name: "Zachary Gordon",
    month: 2,
    day: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/ZACHARY_GORDON_HEADSHOT_%28cropped%29.jpg",
    bio: "American actor best known for his role as Greg Heffley in the first three films of the 'Diary of a Wimpy Kid' movie series.",
    achievement: "Star of the 'Diary of a Wimpy Kid' Film Series",
  },
];
