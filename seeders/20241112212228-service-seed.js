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
    await queryInterface.bulkInsert('services', [
      {
        id: uuidv4(),
        name: 'Design And Branding',
        description: `At OmniVue, we're passionate about igniting your brand's voice and crafting a visual identity that resonates. With 30= years of collective experience, we go beyond aesthetics – we build powerful brands that connect and convert.`,
        slogan: 'It’s more than a logo, it’s the story your brand tells.',
        path: '/omnivue/services/design-and-branding',
        service_image_url: ''
      },
      {
        id: uuidv4(),
        name: 'Integrated Communications & Content',
        description: 'We craft cohesive communication strategies that resonate across every touchpoint.',
        slogan: 'Speak Volumes. Be Heard Everywhere.',
        path: '/omnivue/services/integrated-communications-and-content',
        service_image_url: ''
      },    
      {
        id: uuidv4(),
        name: 'Media Planning, Buying and Programmatic',
        description: `Media planning is more than throwing darts at a target blindfolded. At [Your Company Name], we're laser-focused on delivering results.`,
        slogan: 'Unleash the Power of Precision',
        path: '/omnivue/services/media-planning-buying-and-programmatic',
        service_image_url: ''
      },
      {
        id: uuidv4(),
        name: 'Search Engine Optimization',
        description: 'Tired of being a digital ghost? Get discovered by your ideal customers with our cutting-edge SEO services.',
        slogan: 'Dominate the Search: SEO that Gets You Seen',
        path: '/omnivue/services/search-engine-optimization',
        service_image_url: ''
      },    
      {
        id: uuidv4(),
        name: 'Web Development',
        description: 'Your website is your digital storefront. Don\'t settle for a cookie-cutter solution. We create custom websites that are as unique as your brand.',
        slogan: 'Craft Your Digital Oasis: Bespoke Web Development or Build Your Brand\'s Digital Empire: Bespoke Web Development',
        path: '/omnivue/services/web-development',
        service_image_url: ''
      },
      {
        id: uuidv4(),
        name: 'Regional Marketing',
        description: 'Think global, act local. We help you become a household name in your target region.',
        slogan: 'Become a local legend. Conquer your Regional Market.',
        path: '/omnivue/services/regional-marketing',
        service_image_url: ''
      },    
      {
        id: uuidv4(),
        name: 'Marketing and Business Strategy',
        description: 'Our integrated marketing and business strategy service crafts a clear roadmap for success, driving growth, and propelling your brand to new heights.',
        slogan: 'Marketing & Business Strategy for Exponential Growth',
        path: '/omnivue/services/marketing-and-business-strategy',
        service_image_url: ''
      },    
      {
        id: uuidv4(),
        name: 'Outdoor Advertising',
        description: 'Our impactful outdoor advertising campaigns grab attention, dominate landscapes, and leave a lasting impression on your target audience.',
        slogan: 'Captivate Crowds: Make a Statement with Outdoor Advertising',
        path: '/omnivue/services/outdoor-advertising',
        service_image_url: ''
      }    
     ], {
      transaction
     })
     await transaction.commit()
   } catch (error) {
    console.error(error);
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
