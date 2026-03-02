import React from "react";
import TabsComponent from "../../components/tabs/TabsComponent";

const TabsPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>Tabs page</h1>
      <br />
      <br />

      <TabsComponent items={items}></TabsComponent>
    </div>
  );
};

export default TabsPage;

const items = [
  {
    title: "Tab 1",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro
          delectus non tempora sapiente quisquam vero accusantium veniam
          commodi? Error suscipit laboriosam minima sed culpa minus, debitis
          quam voluptate delectus!
        </p>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          mollitia voluptatum beatae nemo expedita quas unde aspernatur sit
          libero nostrum maiores, iste, debitis cupiditate, atque voluptates
          necessitatibus eum accusamus voluptate.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 3</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, saepe,
          praesentium sit ex aliquid adipisci earum esse iure tenetur corporis
          mollitia sequi. Officiis aliquid, qui harum odit dolor officia
          corporis.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 4",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 4</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          aspernatur vitae sunt nesciunt dolorum accusamus commodi quae alias
          cum saepe ab maxime sint, distinctio quam dignissimos cumque earum
          quisquam. Eaque?
        </p>
      </div>
    ),
  },
  {
    title: "Tab 5",
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 5</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          incidunt, tenetur debitis cum minima quisquam alias quam! Iure
          voluptatem dolor placeat et, quaerat aliquam veritatis esse maxime
          quos ea provident.
        </p>
      </div>
    ),
  },
];
