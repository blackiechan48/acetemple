// src/components/PrivacyPolicy.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const PrivacyPolicy = () => (
  <Container>
    <Title>Privacy Policy</Title>
    <p>Last updated: 11 November 2024</p>
    <p>
      This Privacy Policy describes how Ace Temple Ltd collects, uses, and shares
      personal information when you use our website www.acetemple.com.
    </p>
    <SectionTitle>1. Information We Collect</SectionTitle>
    <p>We may collect various types of personal information:</p>
    <ul>
      <li>Contact Information: Such as your name, email address, and phone number.</li>
      <li>Usage Information: Includes your browsing activity on our website.</li>
      <li>Technical Information: Such as your IP address, browser type, and operating system.</li>
    </ul>
    <SectionTitle>2. How We Use Your Information</SectionTitle>
    <p>We use your information to:</p>
    <ul>
      <li>Provide, maintain, and improve our services.</li>
      <li>Communicate with you about updates, promotions, and other relevant information.</li>
      <li>Analyze website usage to enhance user experience.</li>
    </ul>
    <SectionTitle>3. Sharing Your Information</SectionTitle>
    <p>We do not sell or rent your personal information. However, we may share your information with:</p>
    <ul>
      <li>Service Providers: To perform services on our behalf, such as payment processing or email distribution.</li>
      <li>Legal Requirements: When necessary to comply with laws or respond to valid legal requests.</li>
    </ul>
    <SectionTitle>4. Security</SectionTitle>
    <p>We take reasonable measures to protect your information. However, please note that no method of transmission over the internet is 100% secure.</p>
    <SectionTitle>5. Your Rights</SectionTitle>
    <p>Depending on your jurisdiction, you may have the right to:</p>
    <ul>
      <li>Access your personal information.</li>
      <li>Request correction or deletion of your data.</li>
      <li>Opt-out of certain data uses.</li>
    </ul>
    <SectionTitle>6. Changes to This Privacy Policy</SectionTitle>
    <p>We may update this policy periodically. Any changes will be posted on this page.</p>
    <p>For questions or concerns, please contact us at info@acetemple.com.</p>
  </Container>
);

export default PrivacyPolicy;
