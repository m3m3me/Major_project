require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('./models/Service');
const Portfolio = require('./models/Portfolio');
const TeamMember = require('./models/TeamMember');
const Testimonial = require('./models/Testimonial');

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom, responsive websites built with modern frameworks for speed and scalability.',
    icon: '🌐',
    details: 'We design and develop high-performance websites using React, Next.js, and modern tooling. Every site is mobile-first, SEO-optimized, and built to convert visitors into customers. From corporate sites to complex web applications, we deliver solutions that perform under pressure and scale with your growth.',
    order: 1,
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
    icon: '📱',
    details: 'From concept to App Store — we build iOS and Android apps using React Native and Flutter, ensuring performance and usability across devices. Our apps handle offline mode, push notifications, real-time sync, and deep integrations with device hardware to create truly native-feeling experiences.',
    order: 2,
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Intuitive, user-centered designs that elevate your brand and drive engagement.',
    icon: '🎨',
    details: 'Our design process starts with research and ends with pixel-perfect interfaces. We create wireframes, prototypes, and design systems in Figma that align with your brand identity. Every interaction is tested with real users to ensure maximum usability, accessibility compliance, and conversion optimization.',
    order: 3,
  },
  {
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Scalable cloud infrastructure on AWS, GCP, and Azure for reliability and growth.',
    icon: '☁️',
    details: 'We architect, migrate, and manage cloud environments with a focus on security, cost optimization, and 99.9% uptime SLAs. Our team handles everything from serverless architectures and container orchestration to CI/CD pipelines, monitoring, and disaster recovery planning.',
    order: 4,
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Data-driven marketing strategies that increase visibility and generate leads.',
    icon: '📈',
    details: 'From SEO and PPC to social media and content marketing, we create campaigns that deliver measurable ROI. Our approach combines analytics, A/B testing, and audience segmentation to ensure every marketing dollar works harder for your business.',
    order: 5,
  },
  {
    title: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Strategic technology guidance to align your IT investments with business goals.',
    icon: '💡',
    details: 'We assess your current tech stack, identify gaps, and provide a roadmap for digital transformation that fits your budget and timeline. Whether you need help choosing the right architecture, evaluating vendors, or building an engineering team, our consultants bring decades of experience to the table.',
    order: 6,
  },
];

const portfolios = [
  {
    title: 'FinServe Banking Portal',
    slug: 'finserve-banking-portal',
    description: 'A secure, high-performance banking portal serving 2M+ users with real-time transaction dashboards, multi-factor authentication, and compliance-ready reporting. Built on a microservices architecture for maximum reliability and auditability.',
    client: 'FinServe Inc.',
    category: 'Web Development',
    kpis: [
      { label: 'Active Users', value: '2M+' },
      { label: 'Load Time', value: '<1.5s' },
      { label: 'Uptime', value: '99.99%' },
    ],
    order: 1,
  },
  {
    title: 'HealthTrack Mobile App',
    slug: 'healthtrack-mobile-app',
    description: 'Cross-platform health tracking app with real-time vitals monitoring, telehealth video consultations, and HIPAA-compliant data storage. Features include medication reminders, care plan management, and integration with Apple Health and Google Fit.',
    client: 'HealthTrack Corp.',
    category: 'Mobile App',
    kpis: [
      { label: 'Downloads', value: '500K+' },
      { label: 'App Rating', value: '4.8★' },
      { label: 'Retention', value: '72%' },
    ],
    order: 2,
  },
  {
    title: 'RetailPro E-Commerce Platform',
    slug: 'retailpro-ecommerce',
    description: 'Full-stack e-commerce solution with AI-powered product recommendations, omnichannel inventory management, and a custom CMS. Supports 100K+ concurrent users with sub-second search and seamless checkout flows.',
    client: 'RetailPro Ltd.',
    category: 'E-Commerce',
    kpis: [
      { label: 'Revenue Increase', value: '+340%' },
      { label: 'Conversion Rate', value: '4.2%' },
      { label: 'Cart Abandonment', value: '-45%' },
    ],
    order: 3,
  },
  {
    title: 'EduLearn LMS Platform',
    slug: 'edulearn-lms-platform',
    description: 'A comprehensive learning management system with live video classes, interactive quizzes, progress tracking, and certification. Serves 200K+ students across 15 countries with multi-language support and accessibility compliance.',
    client: 'EduLearn Global',
    category: 'Web Development',
    kpis: [
      { label: 'Students', value: '200K+' },
      { label: 'Course Completion', value: '87%' },
      { label: 'NPS Score', value: '82' },
    ],
    order: 4,
  },
  {
    title: 'LogiFlow Supply Chain Dashboard',
    slug: 'logiflow-supply-chain',
    description: 'Real-time supply chain visibility platform with GPS fleet tracking, predictive analytics for demand forecasting, and automated warehouse management. Reduced logistics costs by 28% within the first quarter of deployment.',
    client: 'LogiFlow Industries',
    category: 'Cloud Solutions',
    kpis: [
      { label: 'Cost Reduction', value: '-28%' },
      { label: 'Delivery Accuracy', value: '99.4%' },
      { label: 'Processing Time', value: '-60%' },
    ],
    order: 5,
  },
  {
    title: 'BrandWise Marketing Suite',
    slug: 'brandwise-marketing-suite',
    description: 'An all-in-one digital marketing platform with campaign management, social media scheduling, SEO auditing, and real-time analytics. Integrated with Google Ads, Meta, and LinkedIn for unified reporting and attribution.',
    client: 'BrandWise Agency',
    category: 'Digital Marketing',
    kpis: [
      { label: 'Client ROAS', value: '5.2x' },
      { label: 'Leads Generated', value: '50K+' },
      { label: 'Time Saved', value: '-70%' },
    ],
    order: 6,
  },
];

const teamMembers = [
  {
    name: 'Arjun Mehta',
    designation: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in digital transformation, driving Outpro.India\'s mission to empower businesses through technology. Previously led engineering at two successful startups.',
    order: 1,
  },
  {
    name: 'Priya Sharma',
    designation: 'CTO',
    bio: 'Full-stack architect specializing in cloud-native solutions, leading our engineering team to deliver scalable, secure platforms. AWS certified with deep expertise in microservices and DevOps.',
    order: 2,
  },
  {
    name: 'Rahul Desai',
    designation: 'Head of Design',
    bio: 'Award-winning UX designer with a passion for creating intuitive, accessible digital experiences that delight users. Former design lead at a Fortune 500 company.',
    order: 3,
  },
  {
    name: 'Neha Patel',
    designation: 'Head of Marketing',
    bio: 'Data-driven marketer who turns insights into campaigns that generate measurable business growth. Expert in growth hacking, content strategy, and performance marketing.',
    order: 4,
  },
  {
    name: 'Karan Singh',
    designation: 'Lead Backend Engineer',
    bio: 'Backend specialist with expertise in Node.js, Python, and distributed systems. Passionate about building APIs that handle millions of requests with zero downtime.',
    order: 5,
  },
  {
    name: 'Ananya Rao',
    designation: 'Lead Frontend Engineer',
    bio: 'React and TypeScript expert focused on building performant, accessible web applications. Advocate for progressive web apps and modern CSS architectures.',
    order: 6,
  },
];

const testimonials = [
  {
    name: 'Vikram Joshi',
    company: 'FinServe Inc.',
    designation: 'VP of Engineering',
    text: 'Outpro.India transformed our banking portal. Their technical expertise and attention to security gave us a platform we can trust. The migration was seamless with zero downtime.',
    order: 1,
  },
  {
    name: 'Sneha Kapoor',
    company: 'HealthTrack Corp.',
    designation: 'Product Director',
    text: 'The mobile app they built exceeded all our KPIs. Their team was responsive, professional, and truly understood our healthcare compliance needs. Highly recommended.',
    order: 2,
  },
  {
    name: 'Amit Reddy',
    company: 'RetailPro Ltd.',
    designation: 'CEO',
    text: 'Our online revenue tripled within six months of launching the e-commerce platform. Best investment we made. The AI recommendations engine alone paid for the entire project.',
    order: 3,
  },
  {
    name: 'Dr. Meera Iyer',
    company: 'EduLearn Global',
    designation: 'Founder',
    text: 'Outpro.India didn\'t just build our LMS — they helped us rethink how students learn online. The platform is intuitive, fast, and our completion rates jumped from 34% to 87%.',
    order: 4,
  },
  {
    name: 'Rajesh Nair',
    company: 'LogiFlow Industries',
    designation: 'COO',
    text: 'The supply chain dashboard gave us visibility we never had before. We can now predict demand, optimize routes, and reduce waste. A game-changer for our operations.',
    order: 5,
  },
  {
    name: 'Divya Menon',
    company: 'BrandWise Agency',
    designation: 'Managing Director',
    text: 'The marketing suite they built consolidated five tools into one. Our team saves 70% of the time they used to spend on reporting, and client results have never been better.',
    order: 6,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    await Service.deleteMany({});
    await Portfolio.deleteMany({});
    await TeamMember.deleteMany({});
    await Testimonial.deleteMany({});

    await Service.insertMany(services);
    await Portfolio.insertMany(portfolios);
    await TeamMember.insertMany(teamMembers);
    await Testimonial.insertMany(testimonials);

    console.log('Seed data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seed();
