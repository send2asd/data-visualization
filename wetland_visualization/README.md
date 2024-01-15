
# Wetland Visualization

## User's Perspectives

1. **Temporal Exploration:**
   - "We are ready now to begin comprehensive analysis of these data and it would be very helpful to be able to visualize various aspects of this across time (we have collected samples over 2-1/2 years and throughout all four seasons)."

2. **Spatial Analysis:**
   - "I would like to have maps with the wetland pools color-coded by their arithmetic mean values for each of the chemical analysis parameters."

3. **Time Segmentation:**
   - "It would also be useful to have the same set of visualizations but for briefer time periods. I haven’t yet decided with certainty which time periods are best."

4. **Change Over Time:**
   - "It would be interesting to have similar visualization of the amount of change over time of the soil chemical parameters comparing the first 6 to 9 months with the last 6 to 9 months."

5. **Flexibility:**
   - "Creative visualization would be more than welcome!"

## Visualization Design Requirements

1. **Four-level, Nested Design:**
   - Detailed design at each level, aligning with the user's perspectives.

2. **Multiple Visualization Idioms/Methods:**
   - At least two different visualization methods that are justified based on their suitability for the data.

3. **Interactivity:**
   - At least three different interactivities, such as zoom in/out, mouse clicking/dragging, and changes based on user interaction.

4. **Appealing Design:**
   - A visually appealing design, including a good layout, pleasant color combination, and thoughtful interactions.

## Design Overview

### Level 1: Conceptualization

The primary goal is to enable comprehensive analysis of chemical analysis data collected over time and space. Key user perspectives include temporal exploration, spatial analysis, time segmentation, change over time, and flexibility.

### Level 2: Abstraction

1. **Temporal Exploration:**
   - Visualization of temporal patterns through line charts and heatmaps.
   
2. **Spatial Analysis:**
   - Utilization of maps for spatial analysis, color-coded by chemical parameters.

3. **Time Segmentation:**
   - Implementation of sliders or dropdowns to allow users to choose specific time periods.

4. **Change Over Time:**
   - Comparative visualizations showcasing changes in soil chemical parameters over distinct time periods.

### Level 3: Representation

1. **Line Charts and Heatmaps:**
   - Line charts will represent temporal trends in chemical parameters.
   - Heatmaps will visualize spatial variations.

2. **Maps:**
   - Maps will be used to represent wetland pools color-coded by mean chemical parameter values.

3. **Sliders/Dropdowns:**
   - Interactive sliders or dropdowns for users to choose and visualize specific time periods.

### Level 4: Implementation

1. **D3 Library:**
   - Utilization of D3 for creating interactive and dynamic visualizations.

2. **Line Charts and Heatmaps:**
   - D3-based line charts and heatmaps for temporal and spatial representations.

3. **Maps:**
   - Integration of D3-based maps for spatial analysis.

4. **Interactivity:**
   - Implementation of zoom in/out, mouse clicking/dragging, and sliders/dropdowns for enhanced interactivity.

## Conclusion

This visualization design aims to fulfill user expectations by providing comprehensive insights into the chemical analysis of water and soil samples. The implementation will focus on creating visually appealing and interactive representations aligned with the user's perspectives.
