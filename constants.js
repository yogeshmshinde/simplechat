// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]

// Create a new Date object
const currentDateTime = new Date();

// Get the current year, month, day, hours, minutes, and seconds
const year = currentDateTime.getFullYear();
const month = currentDateTime.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDateTime.getDate();
const hours = currentDateTime.getHours();
const minutes = currentDateTime.getMinutes();
const seconds = currentDateTime.getSeconds();

// Format the date and time as a string (optional)
const formattedDateTime = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day} ${hours}:${minutes}:${seconds}`;

const savedData = [
  {
    "prompt": "Hi",
    "reply": "Hello! How can I assist you today?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Hello",
    "reply": "Hi there! How can I help you?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "How are you?",
    "reply": "I'm just a computer program, but I'm doing well. How about you?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What is your name?",
    "reply": "I'm a virtual assistant, so I don't have a name. You can call me AI!",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Who created you?",
    "reply": "I was created by Yogesh Mahadev Shinde.",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Tell me a joke",
    "reply": "Sure, why did the computer go to therapy? Because it had too many bytes of emotional baggage!",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What is the meaning of life?",
    "reply": "The meaning of life is a subjective question and varies for each individual. What does it mean to you?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What do you like to do?",
    "reply": "I enjoy helping and providing information. How can I assist you today?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Can you learn?",
    "reply": "I don't learn in the way humans do, but I can be programmed to improve over time based on user interactions.",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Tell me about yourself",
    "reply": "I am a virtual assistant designed to answer questions and assist with ecommerce sector and online product selling information. How may I help you?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What's the weather like today?",
    "reply": "I don't have real-time information, but you can check a weather website or app for the current weather conditions in your location.",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What languages do you speak?",
    "reply": "I can understand and communicate in multiple languages. How can I assist you?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Tell me a fun fact",
    "reply": "Sure! Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "How do you work?",
    "reply": "I operate based on predefined algorithms and respond to user inputs. What can I do for you today?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Can you help me with my homework?",
    "reply": "Certainly! I'll do my best to assist you. What specific question do you need help with?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What's your favorite color?",
    "reply": "I don't have personal preferences, but I'm here to help you with any questions you have.",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Where do you live?",
    "reply": "I exist in the digital realm and don't have a physical location. How can I assist you today?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Can you tell me a story?",
    "reply": "Certainly! Once upon a time...",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What are your abilities?",
    "reply": "I can answer questions, provide information, and assist with various tasks. How may I assist you?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "Do you have feelings?",
    "reply": "I don't have feelings or consciousness. I'm a program designed to assist with information. What can I help you with?",
    "category": "General",
    "date": formattedDateTime
  },
  {
    "prompt": "What is ecommerce",
    "reply": "ecommerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the key benefits of ecommerce for businesses",
    "reply": "ecommerce offers businesses advantages such as a global reach, 24/7 availability, reduced operational costs, efficient inventory management, and the ability to personalize customer experiences through data analytics.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is the significance of secure payment methods in ecommerce",
    "reply": "Secure payment methods are crucial in ecommerce to protect sensitive financial information. Secure transactions build trust with customers and safeguard against online fraud, ensuring a safe and reliable shopping experience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does ecommerce impact traditional retail businesses",
    "reply": "ecommerce has transformed traditional retail by introducing online shopping, leading to changes in consumer behavior. Traditional retailers often integrate online channels to remain competitive, offering customers both in-store and digital shopping options.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What role does customer reviews and feedback play in ecommerce",
    "reply": "Customer reviews and feedback are integral in ecommerce as they influence purchasing decisions. Positive reviews build credibility, while negative feedback can prompt improvements. Honest customer opinions contribute to a transparent and trustworthy online marketplace.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I start selling online",
    "reply": "To start selling online, you can begin by choosing a niche, creating an ecommerce website, setting up secure payment methods, and implementing digital marketing strategies.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the common challenges faced by ecommerce businesses",
    "reply": "ecommerce businesses often face challenges such as fierce competition, cybersecurity threats, logistical issues, and the need to adapt to rapidly changing technology. Overcoming these challenges requires strategic planning and innovation.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does ecommerce contribute to the global economy",
    "reply": "ecommerce contributes to the global economy by facilitating international trade, connecting buyers and sellers across borders, and providing a platform for small businesses to reach a global audience. It fosters economic growth and job creation.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is the role of artificial intelligence in ecommerce",
    "reply": "Artificial intelligence in ecommerce enhances customer experiences through personalized recommendations, chatbots for customer support, and data analytics for market insights. AI optimizes processes, improves efficiency, and contributes to business innovation.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How do ecommerce platforms ensure data security for users",
    "reply": "ecommerce platforms ensure data security through encryption, secure payment gateways, and compliance with data protection regulations. Regular security audits, two-factor authentication, and educating users about online safety are also common practices.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What trends are shaping the future of ecommerce",
    "reply": "The future of ecommerce is influenced by trends such as mobile commerce, augmented reality shopping experiences, sustainability initiatives, voice commerce, and the integration of social media for shopping. Staying abreast of these trends is crucial for businesses to remain competitive.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the best practices for optimizing an ecommerce website?",
    "reply": "Optimizing an ecommerce website involves ensuring fast loading times, mobile responsiveness, clear navigation, high-quality product images, concise product descriptions, and implementing effective SEO strategies.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I attract more visitors to my ecommerce site?",
    "reply": "To attract more visitors to your ecommerce site, utilize digital marketing channels such as social media, content marketing, email campaigns, and paid advertising. Additionally, offer promotions, discounts, and engaging content to capture audience attention.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is dropshipping, and how does it work in ecommerce?",
    "reply": "Dropshipping is a retail fulfillment method where the store doesn't keep the products it sells in stock. Instead, when a store sells a product, it purchases the item from a third party and has it shipped directly to the customer.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What role does social media play in ecommerce marketing?",
    "reply": "Social media is crucial in ecommerce marketing for building brand awareness, engaging with customers, and driving traffic to the ecommerce site. Platforms like Facebook, Instagram, and Pinterest offer opportunities for product promotion and customer interaction.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I build trust with online customers in ecommerce?",
    "reply": "Building trust in ecommerce involves showcasing customer reviews, providing transparent product information, offering secure payment options, having a clear return policy, and ensuring reliable customer support. Trust is essential for customer loyalty.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the key elements of a successful ecommerce product page?",
    "reply": "A successful ecommerce product page includes high-quality product images, compelling product descriptions, clear pricing information, customer reviews, a prominent call-to-action button, and easy navigation. User-friendly design is crucial for conversion.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I handle shipping and logistics for my ecommerce business?",
    "reply": "Handling shipping and logistics in ecommerce involves choosing reliable shipping partners, calculating shipping costs accurately, providing tracking information to customers, and optimizing the fulfillment process for timely deliveries.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the advantages of having a mobile app for my ecommerce store?",
    "reply": "A mobile app for an ecommerce store offers advantages such as enhanced user experience, push notifications for promotions, personalized content, and the ability to leverage mobile-specific features like geolocation and mobile payments.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I handle ecommerce customer service effectively?",
    "reply": "Effective ecommerce customer service involves providing timely responses to inquiries, offering multiple communication channels, resolving issues promptly, and actively seeking feedback for continuous improvement.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What security measures should I implement for my ecommerce website?",
    "reply": "Implementing security measures for an ecommerce website includes using SSL certificates for secure connections, regular security audits, securing payment gateways, and educating users about online security best practices.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I create effective product listings in my ecommerce store?",
    "reply": "Effective product listings in an ecommerce store involve using clear and descriptive titles, providing detailed product descriptions, using high-quality images, and incorporating relevant keywords for better search visibility.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the trends in ecommerce payment methods?",
    "reply": "Trends in ecommerce payment methods include the rise of digital wallets, contactless payments, buy now, pay later options, and the integration of cryptocurrencies. Offering diverse payment options caters to varying customer preferences.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I leverage influencer marketing for my ecommerce business?",
    "reply": "Leveraging influencer marketing in ecommerce involves collaborating with influencers relevant to your niche, creating authentic partnerships, and having influencers promote your products to their audience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the common pitfalls to avoid in ecommerce website design?",
    "reply": "Common pitfalls to avoid in ecommerce website design include complicated navigation, unclear product information, a lengthy checkout process, slow loading times, and lack of mobile responsiveness. A user-friendly design is crucial for success.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does ecommerce personalization enhance the customer experience?",
    "reply": "ecommerce personalization enhances the customer experience by tailoring content, recommendations, and promotions based on individual preferences and behavior. Personalization creates a more engaging and relevant shopping experience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the ethical considerations in ecommerce data collection?",
    "reply": "Ethical considerations in ecommerce data collection involve obtaining user consent, ensuring data privacy, transparently communicating data usage policies, and protecting sensitive customer information from misuse.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can ecommerce businesses address environmental sustainability?",
    "reply": "ecommerce businesses can address environmental sustainability by implementing eco-friendly packaging, reducing carbon footprints in logistics, promoting responsible sourcing, and adopting sustainable business practices.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What role does content marketing play in driving ecommerce sales?",
    "reply": "Content marketing in ecommerce involves creating valuable and relevant content to attract and engage customers. It plays a crucial role in building brand awareness, driving organic traffic, and influencing purchase decisions.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can ecommerce businesses effectively handle returns and refunds?",
    "reply": "Effective handling of returns and refunds in ecommerce involves having a clear and fair return policy, providing easy return processes, and communicating transparently with customers about refund procedures.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the key considerations for cross-border ecommerce expansion?",
    "reply": "Key considerations for cross-border ecommerce expansion include understanding international regulations, adapting to cultural differences, optimizing shipping and logistics, and providing multilingual customer support.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the advantages of ecommerce for businesses?",
    "reply": "ecommerce offers benefits such as a global reach, reduced operational costs, 24/7 availability, and the ability to target a specific audience through online marketing.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How do online payments work?",
    "reply": "Online payments involve the use of secure payment gateways that process transactions between buyers and sellers. Common methods include credit cards, digital wallets, and bank transfers.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is the role of digital marketing in ecommerce?",
    "reply": "Digital marketing in ecommerce involves using online channels such as social media, email, and search engines to promote products, engage customers, and drive sales.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I ensure the security of my online store?",
    "reply": "To ensure the security of your online store, use secure and reputable ecommerce platforms, implement SSL certificates, regularly update software, and educate your customers about online safety.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are some popular ecommerce platforms?",
    "reply": "Popular ecommerce platforms include Shopify, WooCommerce, Magento, and BigCommerce. The choice depends on your business needs, budget, and technical requirements.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How do I handle shipping and fulfillment?",
    "reply": "Shipping and fulfillment involve choosing reliable carriers, calculating shipping costs, offering tracking options, and providing clear delivery timelines to customers.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is dropshipping, and how does it work?",
    "reply": "Dropshipping is a fulfillment method where a store doesn't keep the products it sells in stock. Instead, when a store sells a product, it purchases the item from a third party and has it shipped directly to the customer.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I optimize my ecommerce website for search engines?",
    "reply": "To optimize your ecommerce website for search engines, focus on keyword research, optimize product descriptions and meta tags, improve site speed, and build high-quality backlinks.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can AI help me find the right products to buy online?",
    "reply": "Yes, AI can analyze your preferences and shopping history to recommend products that match your interests and needs.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does AI personalize my online shopping experience?",
    "reply": "AI uses algorithms to analyze your behavior, purchase history, and preferences to provide personalized recommendations, advertisements, and discounts.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can AI help me track my online orders more efficiently?",
    "reply": "Absolutely, AI-powered tracking systems can provide real-time updates on the status and location of your online orders, ensuring a more efficient tracking experience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI assist me in finding the best deals and discounts?",
    "reply": "AI algorithms can scan through vast amounts of data to find the best deals and discounts available, ensuring that you get the most value for your money.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What role does AI play in customer service for online stores?",
    "reply": "AI-driven chatbots can provide instant and personalized customer support, answering queries, handling complaints, and guiding users through the online shopping process.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can AI predict trends in ecommerce, helping me stay ahead in the market?",
    "reply": "Yes, AI can analyze market trends, consumer behavior, and competitor activities to predict future trends in the ecommerce industry, helping you make informed decisions.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does AI enhance product recommendations on ecommerce websites?",
    "reply": "AI analyzes your browsing history, purchase patterns, and similar users' behavior to provide accurate and personalized product recommendations, enhancing your overall shopping experience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can AI help prevent fraud in online transactions?",
    "reply": "Certainly, AI algorithms can detect unusual patterns and behaviors associated with fraud, helping secure online transactions and protect users from potential threats.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI improve the efficiency of inventory management for online retailers?",
    "reply": "AI can optimize inventory levels, predict demand, and automate reordering processes, ensuring that online retailers maintain an efficient and well-managed inventory.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What AI tools can help me analyze customer feedback for my ecommerce business?",
    "reply": "AI sentiment analysis tools can evaluate customer reviews and feedback, providing valuable insights into customer satisfaction and areas for improvement.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI enhance the security of online transactions in ecommerce?",
    "reply": "AI employs advanced security measures, such as biometric authentication and anomaly detection, to safeguard online transactions and protect user information.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can AI help me optimize pricing strategies for my ecommerce products?",
    "reply": "Yes, AI algorithms can analyze market dynamics, competitor pricing, and consumer behavior to optimize pricing strategies and maximize profits for ecommerce products.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI assist in the creation of personalized shopping experiences?",
    "reply": "AI utilizes data on user preferences, browsing history, and demographic information to create personalized shopping experiences, tailoring product recommendations and promotions.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the benefits of implementing AI-powered chatbots in ecommerce customer service?",
    "reply": "AI-powered chatbots provide instant responses, handle routine inquiries, and offer personalized assistance, enhancing the efficiency and effectiveness of ecommerce customer service.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI help in demand forecasting for ecommerce businesses?",
    "reply": "AI utilizes historical data, market trends, and external factors to accurately forecast demand for products, enabling ecommerce businesses to optimize inventory and meet customer needs.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the challenges of integrating AI into small ecommerce businesses?",
    "reply": "While AI offers numerous benefits, challenges include initial implementation costs, the need for skilled personnel, and potential resistance to technological change within small ecommerce enterprises.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI contribute to the personalization of marketing strategies in ecommerce?",
    "reply": "AI analyzes customer data to create targeted marketing campaigns, delivering personalized content, recommendations, and promotions that resonate with individual preferences and behaviors.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What ethical considerations should ecommerce businesses keep in mind when using AI?",
    "reply": "ecommerce businesses should consider transparency, data privacy, and fairness in AI algorithms, ensuring ethical use and building trust among customers when implementing AI technologies.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can AI-powered virtual assistants enhance the shopping experience for online customers?",
    "reply": "AI virtual assistants offer personalized recommendations, answer queries, and streamline the shopping process, creating a more interactive and enjoyable experience for online customers.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "In what ways can AI contribute to supply chain optimization in ecommerce?",
    "reply": "AI optimizes supply chain processes by predicting demand, automating inventory management, and enhancing logistics efficiency, ultimately improving the overall performance of ecommerce supply chains.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I start selling products on Flipkart?",
    "reply": "To start selling on Flipkart, you need to register as a seller on their platform, provide the necessary documents, and list your products following their guidelines.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the fees associated with selling on Flipkart?",
    "reply": "Flipkart charges various fees, including commission fees and shipping fees. The specific fees depend on the category and type of products you are selling.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does Flipkart handle product returns and refunds?",
    "reply": "Flipkart has a return and refund policy in place. Sellers need to adhere to this policy, and the platform provides guidelines on handling returns and processing refunds.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can I sell handmade or unique products on Flipkart?",
    "reply": "Yes, Flipkart allows sellers to list handmade and unique products. You need to provide detailed information about your products during the listing process.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I optimize my product listings for better visibility on Flipkart?",
    "reply": "Optimizing product titles, descriptions, and images can enhance visibility. Additionally, participating in Flipkart promotions and discounts can attract more customers.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is the process for shipping products to customers when selling on Flipkart?",
    "reply": "Sellers can choose to fulfill orders themselves or use Flipkart's fulfillment services. Proper packaging and timely shipping are essential for a positive customer experience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I handle customer inquiries and complaints as a Flipkart seller?",
    "reply": "Responding promptly to customer inquiries and addressing complaints professionally is crucial. Flipkart provides a seller support system to assist in such matters.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What types of products perform well on Flipkart?",
    "reply": "Products with high demand, good quality, and competitive pricing generally perform well on Flipkart. It's essential to research the market and stay updated on trends.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can I run promotions or discounts on my products on Flipkart?",
    "reply": "Yes, Flipkart allows sellers to run promotions and discounts on their products. This can attract more customers and boost sales during special events or festivals.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the key policies I should be aware of as a Flipkart seller?",
    "reply": "Key policies include return and refund policies, product listing guidelines, and seller performance metrics. Familiarizing yourself with these policies is essential for a smooth selling experience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does Flipkart support sellers in building their brand on the platform?",
    "reply": "Flipkart offers tools and features for sellers to build their brand, including customizable storefronts and promotional opportunities. Utilizing these resources can help enhance brand visibility.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the payment options available for Flipkart sellers?",
    "reply": "Flipkart provides multiple payment options for sellers, including direct bank transfers. Sellers can choose the most convenient option based on their preferences.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I track the performance of my products on Flipkart?",
    "reply": "Flipkart provides a seller dashboard that offers insights into product performance, customer feedback, and sales metrics. Regularly monitoring this dashboard can help sellers make informed decisions.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What marketing tools does Flipkart provide to promote my products?",
    "reply": "Flipkart offers various marketing tools, such as sponsored listings and advertising options, to help sellers promote their products and reach a wider audience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Are there any restrictions on the number of products I can list on Flipkart?",
    "reply": "Flipkart typically does not have strict restrictions on the number of products a seller can list. However, it's important to review and comply with Flipkart's product listing guidelines.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is Flipkarts process for verifying seller accounts?",
    "reply": "Flipkart verifies seller accounts by reviewing the provided documents and information during the registration process. Sellers should ensure accurate and authentic details.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can I sell internationally on Flipkart?",
    "reply": "As of now, Flipkart primarily caters to the Indian market. International selling options may be limited, and sellers should check Flipkart's policies for any updates in this regard.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What kind of customer support does Flipkart offer to sellers?",
    "reply": "Flipkart provides a dedicated seller support system to assist with inquiries, issues, and guidance. Sellers can reach out to the support team for assistance.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Are there any seasonal trends or events on Flipkart that sellers can leverage?",
    "reply": "Yes, Flipkart often runs special events, sales, and festivals that sellers can leverage for increased visibility and sales. Participating in these events can be strategically beneficial.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What steps can I take to optimize my product images for better visibility on Flipkart?",
    "reply": "Optimizing product images by ensuring high quality, clear visuals, and accurate representation of products can significantly enhance visibility and attract more customers.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How do I start selling on Amazon India?",
    "reply": "To start selling on Amazon India, you need to create a seller account, list your products, and manage your orders through the seller dashboard.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the fees for selling on Amazon India?",
    "reply": "Amazon charges various fees, including referral fees and fulfillment fees. You can check the fee structure on the Amazon Seller Central website.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I optimize my product listings on Amazon India?",
    "reply": "Optimize your product listings by using high-quality images, relevant keywords, detailed product descriptions, and competitive pricing.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the best practices for promoting my products on Amazon India?",
    "reply": "Promote your products through Amazon Advertising, participate in deals and promotions, and request customer reviews to enhance visibility and sales.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does fulfillment work on Amazon India?",
    "reply": "You can choose to fulfill orders yourself or opt for Fulfillment by Amazon (FBA), where Amazon handles storage, packing, and shipping of your products.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the requirements for shipping to customers on Amazon India?",
    "reply": "Ensure timely shipping, use reliable carriers, and provide accurate tracking information to meet Amazon's shipping standards.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How do I handle returns and customer service on Amazon India?",
    "reply": "Set clear return policies, respond promptly to customer inquiries, and provide excellent customer service to build trust and positive reviews.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What types of products are restricted on Amazon India?",
    "reply": "Certain products, such as illegal items, restricted goods, and items that violate Amazon's policies, are prohibited. Refer to Amazon's prohibited products list for details.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I track the performance of my Amazon India store?",
    "reply": "Monitor your store's performance through the Amazon Seller Central dashboard, which provides insights into sales, customer feedback, and more.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the key factors for winning the Buy Box on Amazon India?",
    "reply": "Offer competitive prices, maintain high seller ratings, ensure reliable and fast shipping, and keep sufficient inventory to increase your chances of winning the Buy Box.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I handle negative reviews on Amazon India?",
    "reply": "Respond professionally to negative reviews, address customer concerns, and strive to improve your products and services based on feedback.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the advertising options available on Amazon India?",
    "reply": "Amazon offers various advertising options, including Sponsored Products, Sponsored Brands, and Display Ads, to promote your products to a broader audience.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I enhance the visibility of my products on Amazon India?",
    "reply": "Optimize product titles, use relevant keywords, leverage Amazon Advertising, and participate in promotional events to boost product visibility.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Are there any resources or tutorials for Amazon India sellers?",
    "reply": "Amazon provides a Seller University with tutorials, webinars, and resources to help sellers understand and navigate the platform effectively.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the customer eligibility criteria for Amazon India's Prime program?",
    "reply": "To be eligible for Amazon Prime, ensure timely order fulfillment, offer free or discounted shipping, and maintain a high level of customer satisfaction.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How does Amazon India handle product warranties and guarantees?",
    "reply": "Sellers are responsible for providing accurate warranty information, and customers can contact sellers directly for warranty-related inquiries.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What is the process for creating effective product images on Amazon India?",
    "reply": "Use high-resolution images, showcase product features, and follow Amazon's image guidelines to create visually appealing product listings.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "Can I sell handmade or custom products on Amazon India?",
    "reply": "Yes, Amazon allows the sale of handmade and custom products. Ensure compliance with Amazon's guidelines for such items.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "How can I deal with counterfeit product issues on Amazon India?",
    "reply": "Report counterfeit issues to Amazon through the Brand Registry program and work with Amazon to address and resolve such incidents.",
    "category": "eCommerce",
    "date": formattedDateTime
  },
  {
    "prompt": "What are the benefits of joining Amazon India's FBA program?",
    "reply": "FBA provides benefits such as access to Amazon Prime customers, streamlined order fulfillment, and enhanced customer trust in fast and reliable shipping.",
    "category": "eCommerce",
    "date": formattedDateTime
  }
];




localStorage.setItem("promptReplies", JSON.stringify(savedData));