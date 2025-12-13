const n=`---
slug: first-post
title: Weird algo
date: 2025-12-12
author: Kelium J.U
---

# Dec 12 2025 11:13 PM

Today was a sad day, because i get the solution with some of cheat because i see the .in and .out files of the USACO problem https://usaco.org/index.php?page=viewproblem2&cpid=567 , The Fence Painting is a basic math problem to determine if a point in the x axis of the numerical line is overlapped or not, i know that this can be made easily with math but i don't know how, so i only use conditionals to verify the range of every point in the numerical line, and that is all, if it's in the range is overlapped and we need to find the min and max values to count the total fence paint, other wise it's necessary count the points separately. Look at the code below: 


\`\`\` java
import java.io.*;
import java.util.*;

/**
 * Simple yet moderately fast I/O routines.
 * Some notes:
 *
 * - When done, you should always do io.close() or io.flush() on the
 *   Kattio-instance, otherwise, you may lose output.
 *
 * - The nextInt(), nextDouble(), and nextLong() methods will throw an
 *   exception if there is no more data in the input.
 *
 * @author: Kattis
 */

class Kattio extends PrintWriter {
    private BufferedReader r;
    private StringTokenizer st;
    // standard input
    public Kattio() { this(System.in, System.out); }
    public Kattio(InputStream i, OutputStream o) {
        super(o);
        r = new BufferedReader(new InputStreamReader(i));
    }
    // USACO-style file input
    public Kattio(String problemName) throws IOException {
        super(problemName + ".out");
        r = new BufferedReader(new FileReader(problemName + ".in"));
    }
    // returns null if no more input
    public String next() {
        try {
            while (st == null || !st.hasMoreTokens())
                st = new StringTokenizer(r.readLine());
            return st.nextToken();
        } catch (Exception e) {}
        return null;
    }
    public int nextInt() { return Integer.parseInt(next()); }
    public double nextDouble() { return Double.parseDouble(next()); }
    public long nextLong() { return Long.parseLong(next()); }
}

public class Paint {
    public static void main(String args[]) throws IOException {
        Kattio io = new Kattio("paint");
        int[] nums = new int[4];

        for(int i=0; i<4; i++) {
            nums[i] = io.nextInt();
        }

        if((nums[0] >= nums[2] && nums[0] <= nums[3]) || (nums[1] >= nums[2] && nums[1] <= nums[3]) ||
                (nums[2] >= nums[0] && nums[2] <= nums[1]) || (nums[3] >= nums[0] && nums[3] <= nums[1])) {
            Arrays.sort(nums);
            io.print(nums[3] - nums[0]);
        } else {
            io.print((nums[1] - nums[0]) + (nums[3] - nums[2]));
        }
        io.close();
    }
}
\`\`\`

I made some advance in the bash script, but don't finish, tomorrow i think that can finish that, and force to validate edge cases to avoid view the test cases values, since this would not be possible in the contests. So that is all. Bye fish!
`;export{n as default};
