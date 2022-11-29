import ImageColors from "react-native-image-colors";

export const getImageColors = async ( uri :string ) => {

    const colors = await ImageColors.getColors(uri, {})
    
    let primaryColor;
    let secundaryColor;

    switch (colors.platform) {
        case 'android':
          // android result properties
          primaryColor = colors.dominant;
          secundaryColor = colors.average;
          break
        case 'ios':
          // iOS result properties
          primaryColor = colors.primary;
          secundaryColor = colors.secondary;
          break
        default:
          throw new Error('Unexpected platform key')
      }

      return [
          primaryColor,
          secundaryColor
      ];
}