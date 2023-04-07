import React from 'react';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const MTClientServer = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[20vh] relative'>
            <div className='absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-center translate-y-[-50%] z-10 p-2'>
                <h2 className='py-2'>Secure Multi-threaded Chat Service</h2>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2 className='py-2'>Client-Side Program</h2>
                <p>
                This program is a Java implementation of a TCP client that establishes a connection with a server and performs a handshake to establish a secure communication channel. The program takes command-line arguments to specify the username, host, and port to connect to. If the arguments are not provided, the program prompts the user to enter a username. The program then uses the Socket class to establish a connection with the server and creates input and output streams to exchange messages with the server.

During the handshake process, the server sends the client three values: g, n, and g^x mod n. The client generates a random value y, calculates g^y mod n, and sends it to the server. The client also calculates the shared key as (g^x mod n)^y mod n and uses the last 8 bits of the binary representation of the shared key as a one-byte pad. The client uses this pad to encrypt and decrypt subsequent messages exchanged with the server.

Overall, this program is a basic implementation of a TCP client that performs a handshake to establish a secure communication channel with a server. It uses Java&apos;s built-in socket and I/O classes to exchange messages with the server and implements a simple encryption key using a one-byte pad.
                </p>
                <h2 className='py-2'>Server-Side Program</h2>
                <p>
                This program is a multi-threaded TCP server that allows multiple clients to connect and chat with each other. When a client connects to the server, a handshake is initiated that generates a shared secret key using the Diffie-Hellman key exchange algorithm.

The server listens for incoming connections on a port specified at runtime. The default port is 22250, but the user can specify a different port number as a command-line argument. Similarly, the user can also specify values for the public generator (gPublic) and modulus (nPublic) used in the Diffie-Hellman key exchange algorithm.

When a client connects, the server initiates the handshake by generating a random integer x, and sends the client the values of gPublic, nPublic, and gxmodn (where gxmodn = gPublic^x mod nPublic). The client sends back the value of gymodn (where gy = gPublic^y mod nPublic), and the server calculates the shared secret key using the formula (gy^x mod nPublic). This key is then used to generate a 1-byte pad, which is used to encrypt and decrypt messages sent between the client and server.

The server keeps track of the connected clients in an ArrayList called clients. To ensure thread safety, the clients ArrayList is synchronized using a ReentrantLock. When a client connects, a new PrintWriter object is created to send messages to that client, and the object is added to the clients ArrayList. When a client disconnects, the corresponding PrintWriter object is removed from the clients ArrayList.

A chat log file is also maintained by the server, named mbe_chat.txt by default. When the first client connects, the server creates the file and writes all chat messages to it. Subsequent clients will also have their chat messages appended to the same file.

Overall, this program allows multiple clients to connect and chat with each other securely using a shared secret key generated through the Diffie-Hellman key exchange algorithm. It also maintains a chat log file for future reference.
                </p>
                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Java</p>
                        <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1' />GCP</p>
                <Link href='MTCSDemo'>
                <button className='px-16 py-2 mt-4 mr-8'>Demo</button>
                </Link>
                <Link href='https://drive.google.com/file/d/1OLnoF9GuLi-9yXcL0qL8szEhsys1YWpm/view'>
                <button className='px-10 py-2 mt-4'>Download Programs</button>
                </Link>
                <Link href='/#projects'>
                <p className='py-12 underline cursor-pointer'>Back</p>
                </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MTClientServer;