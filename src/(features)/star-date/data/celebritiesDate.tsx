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
  }
];