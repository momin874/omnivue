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
     await queryInterface.bulkInsert('inclusions', [
      {
        id: uuidv4(),
        name: 'Brand Voice & tone',
        description: '',
        service_id: nameIdMap['Design And Branding'],
      },
      {
        id: uuidv4(),
        name: 'Brand’s Visual Identity & Personality',
        description: '',
        service_id: nameIdMap['Design And Branding'],
      },
      {
        id: uuidv4(),
        name: 'Content Across the Spectrum',
        description: ' From website copy to social media magic, we create content that engages and converts.',
        service_id: nameIdMap['Integrated Communications & Content'],
      },
      {
        id: uuidv4(),
        name: 'Targeted Marketing/CRM',
        description: 'We seamlessly integrate your message across all platforms, for a unified brand experience.',
        service_id: nameIdMap['Integrated Communications & Content']
      },
      {
        id: uuidv4(),
        name: 'Data-Driven Optimization',
        description: 'We track results and refine your strategy, ensuring maximum impact.',
        service_id: nameIdMap['Integrated Communications & Content']
      },
      {
        id: uuidv4(),
        name: 'Target Audience Profiling',
        description: 'We don\'t play guessing games. We dig deep to understand your ideal customer, their habits, and media consumption patterns.',
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Channel Agnostic Strategy',
        description: 'We go beyond the traditional. We explore a diverse mix of media channels to create a holistic and impactful campaign.',
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Data-Driven Decisions',
        description: 'Numbers don\'t lie. We leverage market research and audience insights to optimize your media spend for maximum ROI.',
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Performance Tracking & Reporting',
        description: 'Transparency is key. We provide ongoing performance reports so you can see the impact of your media strategy in real-time.',
        service_id: nameIdMap['Media Planning, Buying and Programmatic']
      },
      {
        id: uuidv4(),
        name: 'Keyword Alchemy',
        description: 'We\'re keyword wizards, uncovering the search terms your audience craves and weaving them seamlessly into your content.',
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Content Craft & Optimization',
        description: 'Forget stale website copy. We create compelling, SEO-rich content that engages users and signals search engines for prime position.',
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Technical SEO Expertise',
        description: 'From site speed to mobile-friendliness, we ensure your website\'s technical foundation is flawless, boosting search ranking potential.',
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Data-Driven Optimization',
        description: 'We don\'t just guess. We track key SEO metrics and continually refine your strategy for maximum impact.',
        service_id: nameIdMap['Search Engine Optimization']
      },
      {
        id: uuidv4(),
        name: 'Strategic Planning',
        description: 'We don\'t just build websites, we build businesses. We collaborate with you to define your website\'s goals and target audience, ensuring a solution that drives results.',
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'User-Centric Design',
        description: 'We prioritize the user experience. Our websites are intuitive, easy to navigate, and optimized for conversions.',
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Tech Stack Mastery',
        description: 'From front-end to back-end, we wield the latest web development tools to craft secure, scalable, and future-proof websites.',
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Responsive Design',
        description: 'Your website needs to shine on any device. We build responsive websites that adapt seamlessly to desktops, tablets, and smartphones.',
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Visual Storytelling',
        description: 'Captivate your audience with stunning visuals and a user interface that reflects your brand identity.',
        service_id: nameIdMap['Web Development']
      },
      {
        id: uuidv4(),
        name: 'Geo-Targeted Strategies',
        description: 'We pinpoint your ideal customers within your region and craft targeted campaigns that reach them.',
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Local Nuance Mastery',
        description: 'From cultural references to community events, we understand the unique pulse of your region and integrate it seamlessly into your marketing strategy.',
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Hyperlocal Content Creation',
        description: 'We create content that speaks directly to your local audience, building trust.',
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Performance Tracking & Optimization',
        description: 'We track results down to the zip code. Our data-driven approach ensures your regional marketing efforts.',
        service_id: nameIdMap['Regional Marketing']
      },
      {
        id: uuidv4(),
        name: 'Market & Competitor Analysis',
        description: 'We become intelligence agents, gathering insights on your market landscape and competitor strategies.',
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Customer Journey Mapping',
        description: 'We walk a mile in your customers\' shoes, pinpointing their touchpoints and crafting targeted engagement strategies.',
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Goal Setting & Alignment',
        description: 'We define your SMART goals and ensure your marketing and business strategies work in perfect harmony to achieve them.',
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Omnichannel Strategy Development',
        description: 'We create a seamless brand experience across all channels, from social media to brick-and-mortar stores.',
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Data-Driven Decision Making',
        description: 'We don\'t fly blind. We leverage market research and customer data to optimize your strategy for maximum impact.',
        service_id: nameIdMap['Marketing and Business Strategy']
      },
      {
        id: uuidv4(),
        name: 'Strategic Location Selection',
        description: 'Billboards aren\'t one-size-fits-all. We pinpoint high-traffic locations that put your message in front of the right people at the right time.',
        service_id: nameIdMap['Outdoor Advertising']
      },
      {
        id: uuidv4(),
        name: 'Creative Concept Development',
        description: 'Our team of creative masterminds will craft eye-catching visuals and impactful messaging that resonates with your audience.',
        service_id: nameIdMap['Outdoor Advertising']
      },
      {
        id: uuidv4(),
        name: 'Seamless Campaign Execution',
        description: 'From permitting to installation, we handle every aspect of your outdoor advertising campaign, ensuring a smooth and stress-free experience.',
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
