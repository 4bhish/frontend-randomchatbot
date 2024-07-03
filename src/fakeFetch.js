
const sentences = [
    "The sky is blue because it's a reflection of the ocean.",
    "Have you ever tried turning it off and on again?",
    "Why do birds suddenly appear, every time you are near?",
    "The mitochondrion is the powerhouse of the cell.",
    "To be or not to be, that is the question.",
    "42 is the answer to life, the universe, and everything.",
    "I can haz cheezburger?",
    "Did you know that the Eiffel Tower can be 15 cm taller during the summer?",
    "Computers make very fast, very accurate mistakes.",
    "Why is a raven like a writing desk?"
  ];

export const fakeFetch = async (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === '/random-response') {
          const randomIndex = Math.floor(Math.random() * sentences.length);
          resolve({
            statusCode: 200,
            message: 'success',
            response: sentences[randomIndex]
          });
        } else {
          reject(new Error("Failed to fetch data"));
        }
      },1000);
    });
  };