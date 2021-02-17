import React from "react";
import GetTest from "./GetTest";
import "./Results.css"

const Results = (props) => {
  return (
    <div className="gettest">
      {(() => {
        switch (true) {
          case props.crit1 === "One Sample" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "Related" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "Related" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Select NA for sample type." />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "Related" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "NA-OneSample/Correlation" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Chi-Square Test for Goodness of Fit" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "NA-OneSample/Correlation" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Chi-Square Test for Goodness of Fit" />;
          case props.crit1 === "One Sample" &&
            props.crit2 === "NA-OneSample/Correlation" &&
            props.crit3 === "Scale":
            return <GetTest test2use="One sample t Test" />;
          case props.crit1 === "Two Samples" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Chi-square Test of Contingencies" />;
          case props.crit1 === "Two Samples" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Mann-Whtiney U Test" />;
          case props.crit1 === "Two Samples" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Independent Samples t Test" />;
          case props.crit1 === "Two Samples" &&
            props.crit2 === "Related" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="McNemar Test of Change" />;
          case props.crit1 === "Two Samples" &&
            props.crit2 === "Related" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Wilcoxon Signed Rank Test" />;
          case props.crit1 === "Two Samples" &&
            props.crit2 === "Related" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Paired Samples t Test" />;
          case props.crit1 === "Greater than Two Samples" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Chi-Square Test of Contingencies" />;
          case props.crit1 === "Greater than Two Samples" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Kruskall-Wallis One-Way ANOVA" />;
          case props.crit1 === "Greater than Two Samples" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Scale":
            return <GetTest test2use="One-Way Between Groups ANOVA" />;
          case props.crit1 === "Greater than Two Samples" &&
            props.crit2 === "Related" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Cochran's Q Test" />;
          case props.crit1 === "Greater than Two Samples" &&
            props.crit2 === "Related" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Friedman Anova" />;
          case props.crit1 === "Greater than Two Samples" &&
            props.crit2 === "Related" &&
            props.crit3 === "Scale":
            return <GetTest test2use="One-Way Repeated Measures Anova" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "Independent" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "Related" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "Related" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "Related" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Select NA for sample type" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "NA-OneSample/Correlation" &&
            props.crit3 === "Nominal":
            return <GetTest test2use="Cramer's V" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "NA-OneSample/Correlation" &&
            props.crit3 === "Ordinal":
            return <GetTest test2use="Spearman's Rho or Kendall's Tau-B" />;
          case props.crit1 === "Correlation" &&
            props.crit2 === "NA-OneSample/Correlation" &&
            props.crit3 === "Scale":
            return <GetTest test2use="Pearson's Product Moment" />;
          default:
            return (
              <GetTest test2use="Not applicable. Please check sample type." />
            );
        }
      })()}
    </div>
  );
};

export default Results;
