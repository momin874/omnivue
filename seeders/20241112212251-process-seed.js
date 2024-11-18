'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const transaction = await queryInterface.sequelize.transaction()

    try {
   
    const services  = await queryInterface.select(null, 'services', {
      raw: true
     })
     const nameIdMap = {}
     services.forEach(service => nameIdMap[service.name]=service.id)
     await queryInterface.bulkInsert('processes', [
      {
        id: uuidv4(),
        name: 'Discovery',
        description: 'We delve deep with you to understand your vision, target audience, and competitive landscape.',
        order: 1,
        service_id: nameIdMap['Design And Branding']
      },
      {
        id: uuidv4(),
        name: 'Strategic Spark',
        description: 'We develop a data-driven brand strategy that aligns with your business goals and identity.',
        order: 2,
        service_id: nameIdMap['Design And Branding']
      },
      {
        id: uuidv4(),
        name: 'Brand Elements Design',
        description: 'Our team brainstorms and presents a variety of logo and mood board concepts to capture your brand\'s essence together.',
        order: 3,
        service_id: nameIdMap['Design And Branding']
      },
      {
        id: uuidv4(),
        name: 'Brand Activation',
        description: 'We bring your brand to life with the creation of marketing collateral and assets.',
        order: 4,
        service_id: nameIdMap['Design And Branding']
      },
      {
        id: uuidv4(),
        name: 'Launch & Beyond',
        description: 'We provide brand guidelines, communication strategies, and a rollout plan to ensure a successful launch.',
        order: 5,
        service_id: nameIdMap['Design And Branding']
      },
      {
        id: uuidv4(),
        name: 'Evolving Spark',
        description: 'Annual brand reviews ensure your brand continues to reflect your growth and market trends.',
        order: 6,
        service_id: nameIdMap['Design And Branding']
      },
      {
        id: uuidv4(),
        name: 'Immerse',
        description: 'We dive deep into your brand DNA, understanding your goals and audience.',
        order: 1,
        service_id: nameIdMap['Integrated Communications & Content']
      },
      {
        id: uuidv4(),
        name: 'Ideate',
        description: 'We brainstorm big ideas, crafting a powerful communication blueprint.',
        order: 2,
        service_id: nameIdMap['Integrated Communications & Content']
      },
      {
        id: uuidv4(),
        name: 'Amplify',
        description: 'We bring your story to life across every channel, amplifying your brand voice.',
        order: 3,
        service_id: nameIdMap['Integrated Communications & Content']
      },
      {
        id: uuidv4(),
        name: 'Analyze',
        description: 'We measure success, constantly optimizing your strategy for peak performance.',
        order: 4,
        service_id: nameIdMap['Integrated Communications & Content']
      },
      {
        id: uuidv4(),
        name: 'Target Audience Profiling',
        description: 'We don\'t play guessing games. We dig deep to understand your ideal customer, their habits, and media consumption patterns.',
        order: 1,
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Channel Agnostic Strategy',
        description: 'We go beyond the traditional. We explore a diverse mix of media channels to create a holistic and impactful campaign.',
        order: 2,
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Data-Driven Decisions',
        description: 'Numbers don\'t lie. We leverage market research and audience insights to optimize your media spend for maximum ROI.',
        order: 3,
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Performance Tracking & Reporting',
        description: 'Transparency is key. We provide ongoing performance reports so you can see the impact of your media strategy in real-time.',
        order: 4,
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Keyword Research & Analysis',
        description: 'We identify the keywords that unlock high-intent searches and explosive growth.',
        order: 1,
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Content Strategy & Creation',
        description: 'We craft targeted content that educates, entertains, and positions you as an authority.',
        order: 2,
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'On-Page Optimization',
        description: 'We fine-tune your website\'s technical SEO for lightning-fast loading speed and a flawless user experience.',
        order: 3,
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Link Building & Outreach',
        description: 'We secure valuable backlinks from high-authority sites, boosting your website\'s credibility and search ranking.',
        order: 4,
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Wireframing & Prototyping',
        description: 'We craft a visual blueprint of your website, ensuring optimal user flow and functionality.',
        order: 1,
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Design & Development',
        description: 'Our team of designers and developers bring your website to life, pixel-perfect and feature-rich.',
        order: 2,
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Testing & Launch',
        description: 'We meticulously test your website across all devices before a smooth and successful launch.',
        order: 3,
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Ongoing Support & Maintenance',
        description: 'We offer ongoing maintenance and support to ensure your website remains secure and up-to-date.',
        order: 4,
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Regional Market Research',
        description: 'We delve deep into your target region, demographics, and local marketing landscape.',
        order: 1,
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Strategic Planning',
        description: 'We craft a customized regional marketing plan that aligns with your overall business goals.',
        order: 2,
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Content Creation & Localization',
        description: 'We develop content that resonates with local audiences, leveraging local references and cultural insights.',
        order: 3,
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Targeted Campaign Execution',
        description: 'We launch targeted campaigns across the most effective channels to reach your regional audience.',
        order: 4,
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Discovery & Deep Dive',
        description: 'We delve into your business goals, target audience, and current marketing landscape.',
        order: 1,
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Strategic Planning & Roadmapping',
        description: 'We craft a tailored marketing and business strategy that charts your course to success.',
        order: 2,
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Tactical Implementation',
        description: 'We translate strategy into action, developing targeted campaigns and initiatives.',
        order: 3,
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Ongoing Monitoring & Optimization',
        description: 'We meticulously track performance and continuously refine your strategy for lasting results.',
        order: 4,
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Target Audience & Goal Definition',
        description: 'We delve into your ideal customer and identify the specific goals you want to achieve with your outdoor advertising campaign.',
        order: 1,
        service_id: nameIdMap['Outdoor Advertising']
      },
      {
        id: uuidv4(),
        name: 'Strategic Planning & Location Scouting',
        description: 'We research high-impact locations that align with your target audience and campaign objectives.',
        order: 2,
        service_id: nameIdMap['Outdoor Advertising']
      },
      {
        id: uuidv4(),
        name: 'Creative Development & Design',
        description: 'Our design team crafts a visually stunning and impactful message that grabs attention and drives engagement.',
        order: 3,
        service_id: nameIdMap['Outdoor Advertising']
      },
      {
        id: uuidv4(),
        name: 'Campaign Execution & Management',
        description: 'We handle permitting, installation, and overall campaign management, ensuring a seamless process.',
        order: 4,
        service_id: nameIdMap['Outdoor Advertising']
      }
    ],{
      transaction
    })   
    await transaction.commit() 
   } catch (error) {
    console.error(error)
    await transaction.rollback()
    throw error
   }  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
