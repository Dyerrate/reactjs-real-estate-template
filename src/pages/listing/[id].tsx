/* eslint-disable @next/next/no-img-element */
import { AppContext } from "@/components/RealEstateContext";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function SingleListing() {
  const router = useRouter();
  const { propertydata } = useContext(AppContext);

  // To get Single property details onclick
  const selectedProperty = propertydata.find(
    (property) => property.id === parseInt(router.query.id as string)
  );

  if (!selectedProperty) {
    return (
      <div>
        <p className="text-center text-gray-500 text-lg py-12">
          Sorry ! We don't have any house or flat that matches your preferences.
        </p>
      </div>
    );
  }

  const {
    propertyName,
    imageURL,
    location,
    price,
    priceInLakhs,
    bedrooms,
    bathrooms,
  } = selectedProperty;

  const lowerImages = [imageURL, imageURL];

  return (
    <>
      <div className="container px-5 py-12">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          {/* top image */}
          <div className="overflow-hidden rounded-lg">
            <img
              alt={propertyName}
              className="object-cover object-center w-full md:h-96 h-64 border"
              src={imageURL}
            />
          </div>

          <div className="w-full">
            {/* listing image card container */}
            <div className="flex overflow-y-hidden py-10 gap-5 w-3xl">
              {/* other listing images */}
              {lowerImages.map((img, idx) => (
                <Card key={idx} className="w-full mx-3">
                  <CardHeader className="w-full">
                    <div className="overflow-hidden rounded-lg mx-auto">
                      <img
                        alt={propertyName}
                        className="object-cover object-center md:h-48 h-32 border"
                        src={img}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="w-full">
                    <p className="text-center">Listing Image {idx + 1}</p>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* VR Experience Trigger */}
            <div className="flex overflow-x-auto overflow-y-hidden py-10 gap-5 w-full">
              <Button
                className="mx-auto"
                color="primary"
                onPress={() => alert("Trigger VR Experience")}
              >
                Augmented Walkthrough
              </Button>
            </div>
          </div>

          {/* Property Info */}
          <div className="flex flex-col mt-10">
            <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">
              {propertyName}
            </h2>
            <div className="md:flex justify-between border bg-slate-50 px-4 py-2 rounded">
              <div>
                <p className="my-2">
                  <span className="font-semibold mr-2">Location:</span>{" "}
                  {location}
                </p>
                <p className="my-2">
                  <span className="font-semibold mr-2">Price:</span>
                  <span>{price}</span>
                  <span className="ml-2">({priceInLakhs} Lakhs)</span>
                </p>
              </div>
              <div>
                <p className="my-2">
                  <span className="font-semibold mr-2">Bedrooms:</span>{" "}
                  {bedrooms}
                </p>
                <p className="my-2">
                  <span className="font-semibold mr-2">Bathrooms:</span>{" "}
                  {bathrooms}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="bg-white inline-flex justify-center text-indigo-500 border-indigo-500 border py-2 px-6 outline-none hover:bg-indigo-200 rounded text-md">
          <Link href="/listing" className="text-center">
            Go Back
          </Link>
        </button>
      </div>
    </>
  );
}
