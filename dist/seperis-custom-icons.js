const JENN_ICONS_MAP = {
  "wellness-off":{
    path:"M1.49,3.24l2.4,2.4L1.99,15.3c-0.16,0.78,0.03,1.59,0.52,2.22c0.67,0.81,1.56,1.4,2.56,1.71 c0.4,0.37,0.9,0.63,1.43,0.74c0,0-0.5,3.58,5.36,3.56c5.85-0.02,5.61-2.62,5.82-3.65c0.12-0.03,0.22-0.09,0.33-0.13l2.59,2.59 l1.38-1.38L2.88,1.86L1.49,3.24z M12,19.16c-5.77,0-7.9-1.2-8.67-2.21c-0.33-0.39-0.47-0.9-0.38-1.4l1.79-9.06L16.96,18.7 C15.71,18.98,14.1,19.16,12,19.16z M11.84,1.48c0.07,0,0.13,0,0.2,0c5.2,0.03,6.56,1.27,6.66,1.79l2.34,11.84c0.11,0.62-0.07,1.25-0.48,1.73v0 c-0.14,0.19-0.33,0.38-0.57,0.57l0.7,0.7c0.25-0.21,0.48-0.44,0.69-0.69c0.58-0.71,0.81-1.64,0.63-2.54L19.69,3.16 c-0.02-0.44-0.48-2.62-7.64-2.67c-4.62-0.04-6.46,0.98-7.2,1.8l0.73,0.73C6.05,2.45,7.49,1.48,11.84,1.48z", 
    keywords: ["brand","light"]
  }
};

async function getIcon(name) {
  let new_name;

  if (!(name in JENN_ICONS_MAP)) {
    // try swapping the '_' for a '-'
    new_name = name.replace(/_/gm, `-`);
    if (!(new_name in JENN_ICONS_MAP)) {
      console.log(`Icon "${name}" is not available`);
      return '';
    }else{
      console.log(`Aliased "${name}" with "${new_name}"`);
      return {path: JENN_ICONS_MAP[new_name].path};
    }
  }
  return {path: JENN_ICONS_MAP[name].path};
}
async function getIconList() {
  return Object.entries(JENN_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords
  }));
}
window.customIcons = window.customIcons || {};
window.customIcons["sep"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["sep"] = getIcon;


console.info(
    `%c JENN-ICONS %c Version 1.0.1 `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
);
