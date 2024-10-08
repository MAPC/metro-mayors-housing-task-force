export const slugify = (s) => s.split(" ").join("-").toLowerCase();

export const getMuniProfileURL = (municipalityName) => `https://datacommon.mapc.org/profile/${slugify(municipalityName)}/housing`;
