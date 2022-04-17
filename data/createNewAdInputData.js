import { donationsCategories } from "./navbarData";
import { wilayas } from "./wilayas";

const createNewAdInputData = ({ errors, choosenWilayaId, role }) => [
  {
    label: "Advertisement Type*",
    name: "typeId",
    placeholder: "Tab to choose :",
    type: "dropdown",
    errorMessage: errors,
    options: [
      {
        name: "typeId",
        value: "1 - Donation",
      },
      {
        name: "typeId",
        value: "2 - Donation Request",
      },
      {
        name: "typeId",
        value: "3 - Family in Need",
        disabled: role === "association" ? false : true,
      },
      {
        name: "typeId",
        value: "4 - Call For Help",
        disabled: role === "association" ? false : true,
      },
    ],
  },
  {
    label: "Title*",
    name: "title",
    placeholder: "Add Title",
    type: "text",
    errorMessage: errors,
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Describe your Add...",
    type: "textAria",
    errorMessage: errors,
  },
  {
    label: "Wilaya*",
    name: "wilaya",
    placeholder: "Tab to choose :",
    type: "dropdown",
    errorMessage: errors,
    options: wilayas.map((wilaya) => {
      return {
        name: "wilaya",
        value: wilaya.id + " - " + wilaya.name.toLowerCase(),
      };
    }),
  },
  {
    label: "Commune*",
    name: "commun",
    placeholder: "Tab to choose :",
    type: "dropdown",
    errorMessage: errors,
    options: choosenWilayaId
      ? wilayas[choosenWilayaId - 1].communes.map((commune) => {
          return {
            name: "commun",
            value: commune,
          };
        })
      : [{ name: "commun", value: "" }],
  },
  {
    label: "Category*",
    name: "category",
    placeholder: "Tab to choose :",
    type: "dropdown",
    errorMessage: errors,
    options: donationsCategories.map((category) => ({
      name: "category",
      value: category.title,
      icon: category.icon,
    })),
  },
  {
    label: "CCP",
    name: "ccp",
    placeholder: "XXXXXXXXXXXXXX",
    type: "text",
    errorMessage: errors,
  },
  {
    label: "Clée",
    name: "ccpKey",
    placeholder: "XX",
    type: "text",
    errorMessage: errors,
  },
  {
    label: "RIB (for EDAHABIA card)",
    name: "rib",
    placeholder: "XXXXXXXXXXXXXXXXX",
    type: "text",
    errorMessage: errors,
  },
];

export { createNewAdInputData };
