import { Button, TabsList, TabsPanel, TabsTab, Text } from '@mantine/core';
import { Tabs, rem } from '@mantine/core';
export default function HomePage() {

  return <>
    <p className='bg-purple-300'>Home page</p>
    <Button className='bg-green-300 font-extrabold text-xl'>test</Button>
    <Text className='bg-red-500'>ewfwefwefwe</Text>

    <Tabs defaultValue="gallery">
      <TabsList >
        <TabsTab value="gallery" >
          Gallery
        </TabsTab>
        <TabsTab value="messages">
          Messages
        </TabsTab>
        <TabsTab value="settings" >
          Settings
        </TabsTab>
      </TabsList>

      <TabsPanel value="gallery">
        Gallery tab content
      </TabsPanel>

      <TabsPanel value="messages">
        Messages tab content
      </TabsPanel>

      <TabsPanel value="settings">
        Settings tab content
      </TabsPanel>
    </Tabs>
  </>;
}
