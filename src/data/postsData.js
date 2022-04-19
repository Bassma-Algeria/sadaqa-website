import moment from "moment";

const getPostInformationData = (params) => [
  {
    header: "Advertisement Type",
    content: params.type.replace(/_/g, " "),
  },
  {
    header: "Category",
    content: params.category,
  },
  {
    header: "Adress",
    content: `${params.commun}, ${params.wilaya}`,
  },
  {
    header: "CCP",
    content: params.ccp && `${params.ccp} _ ${params.ccp_key}`,
  },
  {
    header: "RIB (for EDAHABIA card)",
    content: params.rib && `${params.rib}`,
  },
  {
    header: "Status",
    content: params.status,
  },
  {
    header: "Published Date",
    content: moment(params.created_at).format("MMMM Do, YYYY"),
  },
  {
    header: "Publisher",
    content: params.first_name && params.first_name + " " + params.last_name,
  },
  {
    header: "Publisher",
    content: params.association_name,
  },
];

export { getPostInformationData };
