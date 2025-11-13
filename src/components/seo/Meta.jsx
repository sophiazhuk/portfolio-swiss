import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "../../config";

const Meta = ({
  title,
  description,
  ogImage,
  ogType = "website",
  path = "/",
}) => {
  const fullTitle = title ? `${title} – ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = ogImage ? `${SITE_URL}${ogImage}` : `${SITE_URL}/images/og/home.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
    </Helmet>
  );
};

export default Meta;
