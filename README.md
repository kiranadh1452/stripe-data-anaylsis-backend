## Express Backend to support the Data Visualization FrontEnd

> Please refer to the swagger documentation regarding the endpoints that are available

### Format of data returned by the endpoint "/analytics/report"

This endpoints returns an object. The keys of this object are the date strings, for e.g: "2022-12".
The values of this object are each an array of individual objects. These inner objects represent a certain type
of data. For eg: data related to type "charge", data related to type "refund", etc.
So the format would be something like this :

```js
{
  "2022-12" : [
    {
      // data for type "refund"
    },
    ...
    {
      // data for type "charge"
    }
  ],
  "2022-11" : []
}
```

-   This data can be used to generate statistics for a particular month/day/year.
    > Go [here](./analyser-queries-for-fronted) to see example analysis in the front end.
