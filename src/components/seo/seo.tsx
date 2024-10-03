import { Helmet } from "react-helmet";

type TSeoProps = {
  title: string;
  description: string;
};

const SEO = ({ title, description }: TSeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="decsriptipn" content={description} />
    </Helmet>
  );
};

export default SEO;
