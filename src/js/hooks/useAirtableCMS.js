import { useState, useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import Airtable from "airtable";

const isLocalOrStaging = window.location.host.startsWith("staging") || window.location.host.startsWith("localhost");

export const useAirtableCMS = ({baseID, tableName, viewName = "Grid view", keyField, fieldMapping, asList = true, sortBy}) => {
  const [cmsObjects, setCMSObjects, lastUpdated] = useLocalStorage(tableName, {});
  const cmsBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(baseID);

  useEffect(() => {
    const updatedRecords = {};
    const unpublishedRecords = [];
    cmsBase(tableName)
      .select({
        view: viewName,
        filterByFormula: `IS_AFTER({Last Modified}, '${new Date(lastUpdated).toISOString()}')`,
        fields: [...Object.values(fieldMapping), "Status"]
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(function (record) {
            const recordStatus = record.get("Status")
            if (recordStatus === "Published" || (isLocalOrStaging && recordStatus === "Preview")) {
              const updatedRecord = {};
              Object.entries(fieldMapping).forEach(([key, value]) => {
                updatedRecord[key] = record.get(value)
              });
              updatedRecords[updatedRecord[keyField]] = updatedRecord;
            } else {
              unpublishedRecords.push(record.get(fieldMapping[keyField]));
            }
          });

          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error(err);
          } else {
            if (Object.keys(updatedRecords).length > 0 || unpublishedRecords.length > 0) {
              const mergedObject = {
                ...cmsObjects,
                ...updatedRecords
              };
              for (let key of unpublishedRecords) {
                delete mergedObject[key];
              }
              setCMSObjects(mergedObject);
            }
          }
        }
      );
  }, []);

  if (asList) {
    const objectList = Object.values(cmsObjects);
    if (sortBy != null) {
      return objectList.sort(sortBy);
    }
    return objectList;
  }

  return cmsObjects;
}

export default useAirtableCMS;
