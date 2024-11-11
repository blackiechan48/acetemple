// src/components/TermsAndConditions.js
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

const TermsAndConditions = () => (
  <Container>
    <Title>Terms and Conditions</Title>
    <p>Last updated: 11th November 2024</p>
    <p>
      These Terms and Conditions govern your use of our website, www.acetemple.com,
      and outline the rules and regulations for its use.
    </p>
    <SectionTitle>1. Acceptance of Terms</SectionTitle>
    <p>By accessing this website, you agree to these Terms and Conditions. If you disagree with any part of these terms, please do not use our website.</p>
    <SectionTitle>2. Intellectual Property</SectionTitle>
    <p>
      All content on this website, including text, graphics, logos, and images, is the
      property of Ace Temple Ltd and protected by copyright and other intellectual
      property laws. You may not reproduce, distribute, or use any content without
      prior written permission.
    </p>
    <SectionTitle>3. User Responsibilities</SectionTitle>
    <p>You agree not to:</p>
    <ul>
      <li>Use the website for any unlawful purposes.</li>
      <li>Post any content that is offensive, defamatory, or infringes upon others' rights.</li>
      <li>Attempt to gain unauthorized access to our systems.</li>
    </ul>
    <SectionTitle>4. Limitation of Liability</SectionTitle>
    <p>
      We strive to ensure the accuracy of the information on our website but cannot
      guarantee it. Ace Temple Ltd is not liable for any damages resulting from
      your use of our website or reliance on its content.
    </p>
    <SectionTitle>5. Third-Party Links</SectionTitle>
    <p>
      Our website may contain links to third-party sites. We are not responsible for the
      content or practices of these external sites and recommend you review their terms
      and privacy policies.
    </p>
    <SectionTitle>6. Termination</SectionTitle>
    <p>We reserve the right to terminate or restrict access to the website for any reason, including breach of these terms.</p>
    <SectionTitle>7. Changes to These Terms</SectionTitle>
    <p>
      We may revise these Terms and Conditions periodically. Any changes will be posted
      on this page, and your continued use of the website signifies your acceptance.
    </p>
    <p>For further information, please contact us at info@acetemple.com.</p>
  </Container>
);

export default TermsAndConditions;
