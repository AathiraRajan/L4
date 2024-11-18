import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//
//const Exercise1 = () => {
// //   return (
// //       <View style={{marginTop:50, margin:20}}>
// //         <Text style={{ fontSize: 24 }}>RP Values</Text>
// //         <Text style={{ color: 'green' }}>Excellence</Text>
// //         <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
// //         <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
// //         <Text style={{ textAlign: 'center' }}>Teamwork</Text>
// //         <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
// //       </View>
// //   );
// // };
// // export default Exercise1;

// const Exercise2 = () => {
//   return (
//       <View style={styles.container}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   title: {
//     fontWeight: 'bold',
//   },
// });
//
// export default Exercise2;

// const Exercise3A = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.childText}>Child 1</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.childText}>Child 2</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.childText}>Child 3</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     borderColor: 'black',
//     width: 100,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   childText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
//
// export default Exercise3A;

// const Exercise3B = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.childText}>Child 1</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.childText}>Child 2</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.childText}>Child 3</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'column', // Change to 'row' if horizontal layout is required
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1, // Allows the parent view to take up available space
//   },
//   Child: {
//     flex: 1, // Makes each child take up equal space within the parent
//     borderWidth: 2,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center', // Centers text vertically and horizontally
//   },
//   childText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
//
// export default Exercise3B;

// const Exercise3C = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue', maxWidth: 90 }]}>
//           <Text style={styles.childText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.childText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue', maxHeight: 120 }]}>
//           <Text style={styles.childText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'column', // Change to 'row' if you need a horizontal layout
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   childText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
//
// export default Exercise3C;

// const Exercise3D = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue', flex: 1 }]}>
//           <Text style={styles.childText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue', flex: 2 }]}>
//           <Text style={styles.childText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue', flex: 3 }]}>
//           <Text style={styles.childText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row', // Arranges children horizontally
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//
//   },
//   Child: {
//     borderWidth: 2,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   childText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
//
// export default Exercise3D;

// const Exercise3E = () => {
//   return (
//       <View style={styles.Parent}>
//         <View style={[styles.Child, { backgroundColor: 'powderblue' }]}>
//           <Text style={styles.childText}>Child One</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
//           <Text style={styles.childText}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, { backgroundColor: 'steelblue' }]}>
//           <Text style={styles.childText}>Child Three</Text>
//         </View>
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     // justifyContent: 'flex-start', // First layout
//     // justifyContent: 'flex-end', // Second layout
//     // justifyContent: 'center', // Third layout
//     // justifyContent: 'space-between', // Fourth layout
//     justifyContent: 'space-around', // Fifth layout
//   },
//   Child: {
//     borderWidth: 2,
//     borderColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 50,
//   },
//   childText: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
//
// export default Exercise3E;

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, styles.square1]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.child, styles.square2]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.child, styles.square3]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    square1: {
        backgroundColor: 'lightblue',
    },
    square2: {
        backgroundColor: 'lightgreen',
    },
    square3: {
        backgroundColor: 'tomato',
    },
});

export default Exercise4;
