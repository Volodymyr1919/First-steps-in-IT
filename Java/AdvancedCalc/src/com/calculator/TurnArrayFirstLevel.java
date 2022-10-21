package com.calculator;

public class TurnArrayFirstLevel
{
    public static int[][] rotateMatrix(int m, int n, boolean clock, int[][] matrix)
    {
        int[][] rotated = new int[n][m];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (clock)
                    rotated[j][i] = matrix[m-i-1][j];
                else
                    rotated[j][i] = matrix[i][n-j-1];
        return rotated;
    }
    public static void main(String[] args)
    {
        int m = 2, n = 2;
        int[][] matrix = {{11, 12}, {13, 14}};
        outputMatrix("Исходная матрица:", matrix);
        outputMatrix("По часовой стрелке:", rotateMatrix(m, n, true, matrix));
        outputMatrix("Против часовой стрелки:", rotateMatrix(m, n, false, matrix));
    }
    public static void outputMatrix(String title, int[][] matrix)
    {
        System.out.println(title);
        for (int[] row : matrix)
        {
            for (int el : row)
                System.out.print(" " + el);
            System.out.println();
        }
    }
}