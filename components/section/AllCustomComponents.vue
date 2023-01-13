<script setup lang="ts">
import { ref } from 'vue';
import HeaderText from './header/HeaderText.vue';
import Navigation1 from './header/Header1.vue';
import Navigation2 from './header/Header2.vue';
import BannerText from './banner/BannerText.vue';
import BrandBanner from './banner/BrandBanner.vue';
import WorkBanner from './banner/BannerWork.vue';
import FormBannerText from './form-banner/FormBannerText.vue';
import FormBannerInput from './form-banner/FormBannerInput.vue';
import FeatureText from './features/FeatureText.vue';
import Feature1 from './features/Feature1.vue';
import Feature2 from './features/Feature2.vue';
import Feature3 from './features/Feature3.vue';
import PortfolioText from './portfolio/PortfolioText.vue';
import Portfolio from './portfolio/Portfolio.vue';
import PriceText from './pricing/PricingText.vue';
import PricingPlans from './pricing/Pricing.vue';
import TeamText from './team/TeamText.vue';
import Team from './team/Team.vue';
import TestimonialText from './testimonial/TestimonialText.vue';
import Testimonial from './testimonial/Testimonial.vue';
import Blog from './blogs/Blog.vue';
import CallActionText from './c2a/C2aText.vue';
import CallActionAsk from './c2a/C2a1.vue';
import AppsButton from './c2a/C2a2.vue';
import ContactText from './contact/ContactText.vue';
import ContactForm from './contact/Contact.vue';
</script>

<template>
    <!----Header Text----->
    <HeaderText />
    <!----Navigation 1----->
    <Navigation1 />
    <!----Navigation 2----->
    <Navigation2 />
    <!----Banner Text----->
    <BannerText/>
    <!----Brand Banner----->
    <BrandBanner/>    
    <!----Work Banner----->
    <WorkBanner/>
    <!----Form Banner----->
    <FormBannerText/>
    <!----Form Email Banner----->
    <FormBannerInput/>
    <!----Feature Text----->
    <FeatureText/>
    <!----Feature 1----->
    <Feature1/>
    <!----Feature 2----->
    <Feature2/>
    <!----Feature 3----->
    <Feature3/>
    <!----Portfolio Text----->
    <PortfolioText/>
    <!----Portfolio----->
    <Portfolio/>
    <!----Price Text----->
    <PriceText/>
    <!----Pricing Plans----->
    <PricingPlans/>
    <!----Team Text----->
    <TeamText/>
    <!----Team----->
    <Team/>
    <!----Testimonials Text----->
    <TestimonialText/>
    <!----Testimonials Quotes----->
    <Testimonial/>
    <!----Blog ----->
    <Blog/>
    <!----Call To Action ----->
    <CallActionText/>
    <!----Ask Questions ----->
    <CallActionAsk/>
    <!----Apps ----->
    <AppsButton/>
    <!----Contact Text ----->
    <ContactText/>
    <!----Contact Form ----->
    <ContactForm/>
</template>