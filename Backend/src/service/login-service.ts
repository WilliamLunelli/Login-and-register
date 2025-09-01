export const authService = {
  login(email: string, password: string) {
    const mockUser = { id: 1, email: "testinho@gmail.com", name: "William" };

    if (email === "testinho@gmail.com" && password === "teste") {
      return { success: true, user: mockUser };
    }

    return { success: false };
  },
};
