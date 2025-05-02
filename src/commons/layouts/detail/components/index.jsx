import React from "react";
import { VisualizationAttr } from "@/commons/components";

const DetailComponentLayout = ({
  item,
  itemsAttrs,
  itemsEvents,
  itemsModals,
}) => {
  return (
    <div className="card card-body mx-auto w-full bg-white shadow-xl not-prose p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2">
          {itemsAttrs?.map(
            (va) =>
              va.label.match("Gambar") && (
                <VisualizationAttr
                  label={va.label}
                  content={item[va.featureName]}
                />
              )
          )}
        </div>
        <div className="flex flex-col px-4 gap-2 sm:w-1/2">
          <div className="grid grid-cols-2 gap-2 content-start">
            {itemsAttrs?.map(
              (va) =>
                !va.label.match("Deskripsi") &&
                !va.label.match("Gambar") && (
                  <VisualizationAttr
                    label={va.label}
                    content={item[va.featureName]}
                  />
                )
            )}
          </div>
          {itemsAttrs?.map(
            (va) =>
              va.label.match("Deskripsi") && (
                <VisualizationAttr
                  label={va.label}
                  content={item[va.featureName]}
                />
              )
          )}
        </div>
      </div>
      <div className="card-actions justify-end">
        {/* View Element Event [singularName /] Element*/}
        {itemsEvents?.map((event) => event)}
      </div>
      {itemsModals?.map((modal) => modal)}
    </div>
  );
};

export default DetailComponentLayout;
